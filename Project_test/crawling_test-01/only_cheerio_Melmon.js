// 멜론 iconv 없어도 사용 가능
// 멜론은 체리오로 사용 가능

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

const url = "https://www.melon.com/chart/index.htm";


app.get('/test', (req, res) => {
    res.render('index');
});

app.get('/', async (req, res) => {
    await axios({
        method: 'get',
        url: url,
        // iconv 디코딩을 사용하려면 arraybuffer 타입으로 받아야 한다.
        // responseType: "arraybuffer"
    }).then((response) => {
        // console.log(response.data);

        // <meta charset="UTF-8">' 인 경우에는 안해도 되는 작업
        // const content = iconv.decode(response.data, 'EUC-KR');
        // console.log(content);
        const $ = cheerio.load(response.data);

        const list = $("table > tbody > tr.lst50");
        console.log(list.length);

        list.each((i, tag) => {

            // 멜론
            const title = $(tag).find("td:nth-child(6) > div.wrap > div > div.rank01 > span > a").text();
            const likeCount = $(tag).find("td:nth-child(8) > div > button > span.cnt").text();
            const imgsrc = '';
            console.log(i + 1, {
                title,
                imgsrc,
                likeCount
            });
        });
        res.send(true);
        
    }).catch(err => {
        console.log(err);
    });

    // const $ = cheerio.load('<h1 class="title">하이</h1>');
    // let a = $('h1.title').text();
    // console.log(a);
    // res.send(true);
})


app.listen(port, () => {
    console.log('server open: ', port);
});
