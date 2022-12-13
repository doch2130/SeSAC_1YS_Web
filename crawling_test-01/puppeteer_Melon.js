// puppeteer 사용해야 멜론의 좋아요 건수 가져오기 가능

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

const url = "https://www.melon.com/chart/index.htm";



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
        await page.waitForSelector('table > tbody > tr.lst50');
        // $에 cheerio를 로드한다.
        const content = await page.content();
        // 복사한 리스트의 Selector로 리스트를 모두 가져온다.
        const $ = cheerio.load(content);
        // 가져오는 데이터의 list 부분을 설정한다.
        const lists = $("table > tbody > tr.lst50");
        console.log(lists.length);

        // 모든 리스트를 순환한다. await 함수를 이용해서 종료가 끝나야 다음 함수가 실행되게 설정한다.
        // await를 설정하지 않으면 데이터가 저장되기 전에 파일 저장함수가 먼저 실행되서 빈 값이 들어간다.
        await lists.each((index, list) => {
            // 각 리스트의 하위 노드중 호텔 이름에 해당하는 요소를 Selector로 가져와 텍스트값을 가져온다.
            const rank = $(list).find("td:nth-child(2) > div > span.rank").text();
            const rankVariance = $(list).find("td:nth-child(3) > div > span").text();
            const albumImg = $(list).find("td:nth-child(4) > div > a > img").attr('src');
            const title = $(list).find("td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a").text();
            const singer = $(list).find("td:nth-child(6) > div > div > div.ellipsis.rank02 > a").text();
            const albumTitle = $(list).find("td:nth-child(7) > div > div > div > a").text();
            // 좋아요 수를 불러오는데 앞에 불필요한 텍스트를 자르고 숫자만 가져온다.  \n총 건수\n123,451 => slic함수로 123,451만 가져온다.
            const likeCount = $(list).find("td:nth-child(8) > div > button > span.cnt").text().slice(5);

            // 인덱스와 함께 로그를 찍는다.
            // console.log({
            //    index, title, rank, rankVariance, albumImg, title, singer, albumTitle, likeCount
            // });

            // 데이터 저장 변수 설정 및 데이터 저장
            let obj = {
                title: title,
                rank: rank,
                rankVariance: rankVariance,
                albumImg: albumImg,
                singer: singer,
                albumTitle: albumTitle,
                likeCount: likeCount
            }
            // json 데이터에 저장한 데이터 1개씩 저장
            data.data.push(obj);
        });
        // 브라우저를 종료한다.
        browser.close();


        // 파일 저장
        // 날짜 객체 설정
        let date = new Date();
        // 파일 이름 설정 melonChartHour-년-월-일-시간
        let formatDate = 'melonChartHour' + '-' + date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2) + '-' + ('00' + date.getHours()).slice(-2);

        // 파일 경로 및 이름, 확장자 설정
        let fileName = './testFolder/'+formatDate+'.json';

        // 파일 작성    stringify 함수로 data 작성시 탭 넣어서 보기 편하게 변경
        fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => {
            if(err) console.log(err);
            else {
                console.log('Melon fs write success');
            }
        });

    })();

    // 렌더 종료떄문에 임시로 넣은 거
    res.send(true);
});

app.listen(port, () => {
    console.log('server open: ', port);
});

