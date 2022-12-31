// Youtube는 푸피터 + 체리오를 사용해야 한다.
// Youtube는 iconv 없어도 사용 가능

const express = require('express');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/static', express.static(__dirname+'/static'));

const url = "https://charts.youtube.com/charts/TopSongs/kr?hl=ko";

app.get('/', (req, res) => {
    // 크롤링 + 파일 저장 함수 시작
    (async() => {
        // json 데이터 저장 변수
        let data = {};
        data.data = [];

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
        // "https://charts.youtube.com/charts/TopSongs/kr?hl=ko" URL에 접속하여 페이지의 HTML을 가져온다.
        await page.goto(url);
        // 해당 셀렉터가 출력될 때까지 기다려준다.        
        await page.waitForSelector('#chart-table > div.chart-table-container > div.chart-table > div.chart-table-row');
        // $에 cheerio를 로드한다.
        const content = await page.content();
        // 복사한 리스트의 Selector로 리스트를 모두 가져온다.
        const $ = cheerio.load(content);
        // 가져오는 데이터의 list 부분을 설정한다.
        const lists = $("#chart-table > div.chart-table-container > div.chart-table > div.chart-table-row");
        console.log(lists.length);

        // 모든 리스트를 순환한다. await 함수를 이용해서 종료가 끝나야 다음 함수가 실행되게 설정한다.
        // await를 설정하지 않으면 데이터가 저장되기 전에 파일 저장함수가 먼저 실행되서 빈 값이 들어간다.
        await lists.each((index, list) => {
            // 각 리스트의 하위 노드중 호텔 이름에 해당하는 요소를 Selector로 가져와 텍스트값을 가져온다.
            const rank = $(list).find("div.index-cell.style-scope.ytmc-chart-table > div.current-rank.style-scope.ytmc-chart-table > div.rank.style-scope.ytmc-chart-table").text();
            const lastWeekRank = $(list).find("div.index-cell.style-scope.ytmc-chart-table > div.previous-rank.style-scope.ytmc-chart-table > span").text();
            const albumImg = $(list).find("div.thumbnail-cell.style-scope.ytmc-chart-table > img").attr('src');
            const title = $(list).find("div.title-cell.style-scope.ytmc-chart-table > div.entity-title.style-scope.ytmc-chart-table > ytmc-ellipsis-text > div > span").text();
            const singer = $(list).find("div.title-cell.style-scope.ytmc-chart-table > div.entity-subtitle.style-scope.ytmc-chart-table > ytmc-artists-list > div > span").text();
            const chartDuration = $(list).find("div.chart-period-cell.style-scope.ytmc-chart-table > div > span").text();
            const views = $(list).find("div.views-cell.style-scope.ytmc-chart-table > div > span").text();
            let link = $(list).find("div.thumbnail-cell.style-scope.ytmc-chart-table > img").attr('endpoint');
            
            // endpoint 속성으로 가져올 시 다른 데이터가 같이 가져와진다.
            // slice로 자르기 위해서 start, end 위치를 확인하고 그에 맞게 값을 가져오는 설정을 1번 더 작업해준다.
            // link 변수의 데이터 변경이 이루어지기 때문에 const에서 let으로 변경하였다.
            const linkStart = link.indexOf('"https:') + 1;
            const linkEnd = link.indexOf("target") - 3;
            link = link.slice(linkStart, linkEnd);

            // 인덱스와 함께 로그를 찍는다.
            // console.log({
            //    index, title, rank, lastWeekRank, albumImg, title, singer, chartDuration, views, link
            // });

            // 데이터 저장 변수 설정 및 데이터 저장
            let obj = {
                title: title,
                rank: rank,
                lastWeekRank: lastWeekRank,
                albumImg: albumImg,
                singer: singer,
                chartDuration: chartDuration,
                views: views,
                link: link
            }
            // json 데이터에 저장한 데이터 1개씩 저장
            data.data.push(obj);
        });
        // 브라우저를 종료한다.
        browser.close();


        // 파일 저장
        // 날짜 객체 설정
        let date = new Date();
        // 파일 이름 설정 youtubeChartHour-년-월-일-시간
        let formatDate = 'youtubeChartHour' + '-' + date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2) + '-' + ('00' + date.getHours()).slice(-2);

        // 파일 경로 및 이름, 확장자 설정
        let fileName = './chart_data/Youtube/'+formatDate+'.json';

        // 파일 작성    stringify 함수로 data 작성시 탭 넣어서 보기 편하게 변경
        fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => {
            if(err) console.log(err);
            else {
                console.log('Youtube fs write success');
            }
        });

    })();

    // 렌더 종료떄문에 임시로 넣은 거
    res.send(true);
});

app.listen(port, () => {
    console.log('server open: ', port);
});

