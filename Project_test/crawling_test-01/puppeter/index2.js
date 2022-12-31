const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const puppeteer = require('puppeteer');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/static', express.static(__dirname+'/static'));

const url = "https://product.kyobobook.co.kr/bestseller/total";
const url2 = "https://yjiq150.github.io/coronaboard-crawling-sample/dom";
const url3 = "https://www.melon.com/chart/";




// axios로 해봤는데 데이터가 이상하게 출력이 되는 현상 확인
// 동적으로 데이터를 받아와서 출력을 하는 교보문고, 멜론 차트라서 그런지 데이터 출력이 안되거나 1번 인덱스에 title이 몰아서 나오는 경우가 있음
// 동적에서 데이터를 가져올 수 있는 puppeteer를 사용하면 된다고 함
// 일단 puppeteer 사용결과 여기어때 호텔 페이지는 잘 작동확인
// index3.js에서 멜론 테스트 예정


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
    width: 1366,
    height: 768
  });
  // "https://www.goodchoice.kr/product/search/2" URL에 접속한다. (여기어때 호텔 페이지)
  await page.goto('https://www.goodchoice.kr/product/search/2');

  // 페이지의 HTML을 가져온다.
  const content = await page.content();
  // $에 cheerio를 로드한다.
  const $ = cheerio.load(content);
  // 복사한 리스트의 Selector로 리스트를 모두 가져온다.
  const lists = $("#poduct_list_area > li");
  // 모든 리스트를 순환한다.
lists.each((index, list) => {
    // 각 리스트의 하위 노드중 호텔 이름에 해당하는 요소를 Selector로 가져와 텍스트값을 가져온다.
    const name = $(list).find("a > div > div.name > strong").text();
    // 인덱스와 함께 로그를 찍는다.
    console.log({
      index, name
    });
  });
  // 브라우저를 종료한다.
  browser.close();
})();


// app.get('/test', (req, res) => {
//     res.render('index');
// });

// app.get('/', (req, res) => {
//     axios({
//         method: 'get',
//         url: url3,
//         // url: 'http://localhost:8080/test',
//         // iconv 디코딩을 사용하려면 arraybuffer 타입으로 받아야 한다.
//         // responseType: "arraybuffer"
//     }).then((response) => {
//         // console.log(response.data);

//         // <meta charset="UTF-8">' 인 경우에는 안해도 되는 작업
//         // const content = iconv.decode(response.data, 'EUC-KR');
//         // console.log(content);
//         const $ = cheerio.load(response.data);
//         // const titles = $('.prod_list > li > p:nth-child(3) > a').text();
//         // console.log(titles);

//         const list = $("table > tbody");
//         // console.log(list);

//         // let imgsrc = $(tag).find("div.prod_thumb_box a span img").attr("src");
//         // let title = $(tag).find("div.prod_info_box a span").text();
//         list.each((i, tag) => {
//             // 교보문고인데 왜 안나올까
//             // let title = $(tag).find("div.prod_area > div.prod_info_box > a > span").text();
//             // let imgsrc = $(tag).find("div.prod_area > div.prod_thumb_box > a > span > img").attr("src");

//             setTimeout(() => {
//                 const title = $(tag).find("tr.lst50 > td:nth-child(6) > div.wrap > div > div.rank01 > span > a").text();
//                 const imgsrc = '';
//                 console.log(i + 1, {
//                     title,
//                     imgsrc
//                 });
//             }, 3000);
//             // 멜론
            
//         });
        
        
//         // let test = $('.slide p');
//         // test.each((i, tag) => {
//         //     console.log($(tag));
//         //     console.log($(tag).text());
//         // });
        
//     }).then((response) => {
//         res.send(true);
//     }).catch(err => {
//         console.log(err);
//     });

//     // const $ = cheerio.load('<h1 class="title">하이</h1>');
//     // let a = $('h1.title').text();
//     // console.log(a);
//     // res.send(true);
// })



app.listen(port, () => {
    console.log('server open: ', port);
});
