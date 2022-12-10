// Youtube는 푸피터 + 체리오를 사용해야 한다.
// Youtube는 iconv 없어도 사용 가능

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/static', express.static(__dirname+'/static'));

const url = "https://charts.youtube.com/charts/TopSongs/kr?hl=ko";


app.get('/test', (req, res) => {
    res.render('index');
});


app.get('/', (req, res) => {
    // puppeteer을 가져온다.
    const puppeteer = require('puppeteer');

    (async() => {
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
        // const lists = $("#poduct_list_area > li");
        const lists = $("#chart-table > div.chart-table-container > div.chart-table > div.chart-table-row");
        console.log(lists.length);
        // 모든 리스트를 순환한다.
        lists.each((index, list) => {
            // 각 리스트의 하위 노드중 호텔 이름에 해당하는 요소를 Selector로 가져와 텍스트값을 가져온다.
            const name = $(list).find("div.chart-table-row > div.title-cell.style-scope.ytmc-chart-table > div.entity-title.style-scope.ytmc-chart-table > ytmc-ellipsis-text > div > span").text();
            const name2 = $(list).find("div.chart-table-row > div:nth-child(4) > div.entity-title > .ellipsis-title").attr('aria-label');
            // 인덱스와 함께 로그를 찍는다.
            console.log({
            index, name, name2
            });
        });
        // 브라우저를 종료한다.
        browser.close();
    })();


    res.send(true);
});

app.listen(port, () => {
    console.log('server open: ', port);
});
