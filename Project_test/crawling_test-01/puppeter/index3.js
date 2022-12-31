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
const url3 = "https://www.melon.com/chart/index.htm";


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

  // 여기어때 대신에 url3 변수 - 멜론 차트로 설정
  await page.goto(url3);

  // 페이지의 HTML을 가져온다.
  const content = await page.content();
  // $에 cheerio를 로드한다.
  const $ = cheerio.load(content);
  // 복사한 리스트의 Selector로 리스트를 모두 가져온다.
  // 여기 어때
  // const lists = $("#poduct_list_area > li");
  // 멜론
  const lists = $("table");
  // 모든 리스트를 순환한다.
lists.each((index, list) => {
    // 각 리스트의 하위 노드중 호텔 이름에 해당하는 요소를 Selector로 가져와 텍스트값을 가져온다.
    // 여기어때
    // const name = $(list).find("a > div > div.name > strong").text();
    // 멜론
    const name = $(list).find("#lst50 > td:nth-child(6) > div > div > div.ellipsis.rank01 > span > a").text();
    // 인덱스와 함께 로그를 찍는다.
    console.log({
      index, name
    });
  });
  // 브라우저를 종료한다.
  console.log('종료');
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

//             // 멜론
//                 const title = $(tag).find("tr.lst50 > td:nth-child(6) > div.wrap > div > div.rank01 > span > a").text();
//                 const imgsrc = '';
//                 console.log(i + 1, {
//                     title,
//                     imgsrc
//                 });
            
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
