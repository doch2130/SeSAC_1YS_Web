// Genie는 푸피터 + 체리오를 사용해야 한다.
// Genie는 iconv 없어도 사용 가능

const express = require('express');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
// const fs = require('fs');
const fs = require('fs').promises;
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/static', express.static(__dirname+'/static'));

// 1페이지 1 ~ 50
const url = "https://www.genie.co.kr/chart/top200";
// 2페이지 51 ~ 100
const url2 = "https://www.genie.co.kr/chart/top200?pg=2";

app.get('/', (req, res) => {
    // 크롤링 + 파일 저장 함수 시작
    (async() => {
        // json 데이터 저장 변수
        let data = {};
        data.data = [];

        // 1페이지 실행 후 2페이지도 하기 위해 for문으로 2번 실행하게 설정한다.
        for (let i = 1; i < 3; i++) {
            // 브라우저를 실행한다.
            // 옵션으로 headless모드를 끌 수 있다.
            const browser = await puppeteer.launch({
                headless: false
            });

            // 새로운 페이지를 연다.
            const page = await browser.newPage();
            // 페이지의 크기를 설정한다.
            await page.setViewport({
                width: 1920,
                height: 1080
            });

            // 처음에 1 ~ 50 페이지가 저장되어 있는 url 변수를 사용하고, 2번째에는 51 ~ 100 페이지가 저장되어 있는 url2 변수를 사용한다.
            if(i == 1) {
                // "https://www.genie.co.kr/chart/top200" URL에 접속하여 페이지의 HTML을 가져온다.
                await page.goto(url);
            } else {
                await page.goto(url2);
            }
            
            // 해당 셀렉터가 출력될 때까지 기다려준다.        
            await page.waitForSelector('table.list-wrap > tbody > tr.list');
            // $에 cheerio를 로드한다.
            const content = await page.content();
            // 복사한 리스트의 Selector로 리스트를 모두 가져온다.
            const $ = cheerio.load(content);
            // 가져오는 데이터의 list 부분을 설정한다.
            const lists = $("table.list-wrap > tbody > tr.list");
            console.log(lists.length);

            // 모든 리스트를 순환한다. await 함수를 이용해서 종료가 끝나야 다음 함수가 실행되게 설정한다.
            // await를 설정하지 않으면 데이터가 저장되기 전에 파일 저장함수가 먼저 실행되서 빈 값이 들어간다.
            await lists.each((index, list) => {
                // 각 리스트의 하위 노드중 호텔 이름에 해당하는 요소를 Selector로 가져와 텍스트값을 가져온다.
                let rank = $(list).find("td.number").text();
                const rankVariance = $(list).find("td.number > span > span > span").text();
                const albumImg = $(list).find("td:nth-child(3) > a > img").attr('src');
                // title의 경우 더미 값이 추가 되지만 rank랑은 조금 다르게 가져와진다. trim 함수로 띄어쓰기를 제거하여 원하는 값만 가져온다.
                const title = $(list).find("td.info > a.title.ellipsis").text().trim();
                const singer = $(list).find("td.info > a.artist.ellipsis").text();
                const albumTitle = $(list).find("td.info > a.albumtitle.ellipsis").text();
                let detailLink = $(list).find("td.link > a").attr('onclick');
                
                // rank 변수에서 데이터를 가져올 시 더미 데이터가 같이 가져와진다.
                // slice로 자르기 위해서 end 위치를 확인하고 그에 맞게 값을 가져오는 설정을 1번 더 작업해준다.
                // rank의 경우에는 start가 0으로 고정이라서 End만 있으면 된다.
                // rank 변수의 데이터 변경이 이루어지기 때문에 const에서 let으로 변경하였다.
                const rankEnd = rank.indexOf('\n');
                rank = rank.slice(0, rankEnd);

                // onclick 속성으로 가져올 시 다른 데이터가 같이 가져와진다.
                // slice로 자르기 위해서 start, end 위치를 확인하고 그에 맞게 값을 가져오는 설정을 1번 더 작업해준다.
                // detailLink 변수의 데이터 변경이 이루어지기 때문에 const에서 let으로 변경하였다.
                const linkStart = detailLink.indexOf('fo(') + 4;
                const linkEnd = detailLink.indexOf(');return') - 1;
                detailLink = "https://www.genie.co.kr/detail/songInfo?xgnm=" + detailLink.slice(linkStart, linkEnd);

                // 인덱스와 함께 로그를 찍는다.
                console.log({
                    // 2번째 실행 시 index가 다시 0부터 올라와서 콘솔창에서 보면 헷갈릴 수도 있습니다.
                    index, title, rank, rankVariance, albumImg, title, singer, albumTitle, detailLink
                });

                // 데이터 저장 변수 설정 및 데이터 저장
                let obj = {
                    title: title,
                    rank: rank,
                    rankVariance: rankVariance,
                    albumImg: albumImg,
                    singer: singer,
                    albumTitle: albumTitle,
                    detailLink: detailLink,
                }
                // json 데이터에 저장한 데이터 1개씩 저장
                data.data.push(obj);
            });
            // 브라우저를 종료한다.
            browser.close();
        }


        console.log('for문 종료');


        // 파일 저장
        // 날짜 객체 설정
        let date = new Date();
        // 파일 이름 설정 genieChartHour-년-월-일-시간
        let formatDate = 'genieChartHour' + '-' + date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2) + '-' + ('00' + date.getHours()).slice(-2);

        // 파일 경로 및 이름, 확장자 설정
        let fileName = './chart_data/Genie/'+formatDate+'.json';

        // 파일 작성    stringify 함수로 data 작성시 탭 넣어서 보기 편하게 변경
        await fs.writeFile(fileName, JSON.stringify(data, null, '\t'))
        .then(() => {
            console.log('Genie fs write success');
        })
        .catch((err) => {
            throw err;
        });

        GenieDetailCrawling(fileName);

    })();
    
    // 렌더 종료떄문에 임시로 넣은 거
    res.send(true);
});

app.listen(port, () => {
    console.log('server open: ', port);
});



// 1차로 크롤링한 지니 차트 파일을 읽어와서 2차 크롤링 작업(세부 페이지)
function GenieDetailCrawling(fileName) {
    const axios = require('axios');
    const fs2 = require('fs');
    console.log('지니 디테일 크롤링 함수 시작');

    let lists;
    // JSON 파일 읽어서 detail 링크 불러오기
    // readFile 파일 읽는 명령어
    fs2.readFile(fileName, 'utf8', async (err, data) => {
        if(err) throw err;

        // json.parse로 파싱, 안해주면 JSON 데이터를 불러오지 못한다.
        const result = JSON.parse(data);
        // console.log(result.data);
        console.log(result.data.length);
        // console.log(result.data[49].detailLink);

        // JSON에 데이터 추가하기
        lists = result.data;
        // console.log(lists);
        // lists[0].test = 'test123';
        // console.log(lists[0].title);
        // console.log(lists[0]);

        for (i = 0; i < lists.length; i++) {
            const url = lists[i].detailLink;
            // console.log({i, url});

            await axios({
                method: 'get',
                url: url,
                // iconv 디코딩을 사용하려면 arraybuffer 타입으로 받아야 한다.
                // responseType: "arraybuffer"
            }).then((response) => {
                // console.log(response.data);

                const $ = cheerio.load(response.data);

                const list = $("#body-content > div.song-main-infos > div.aside-zone.daily-chart > div.total");
                const total = $(list).find("div:nth-child(2) > p").text();

                lists[i].totalNumPlay = total;
                // console.log(lists[i]);
            }).catch(err => {
                console.log(err);
            });
        }
        console.log('----------------');

        let resultEnd = {};
        resultEnd.data = [];

        for(i = 0; i < lists.length; i++) {
            resultEnd.data.push(lists[i]);
        }
        console.log(resultEnd);

        fs2.writeFile(fileName, JSON.stringify(resultEnd, null, '\t'), (err) => {
            if(err) console.log(err);

            console.log('Genie fs write success');

        });
    });
}
