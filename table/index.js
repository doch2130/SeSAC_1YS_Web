const { response } = require('express');
const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use("/static", express.static(__dirname+"/static"));

app.get('/', (req, res) => {
    res.render('index');
});


// 처음 url 접속시 실행 함수
app.get('/table', async (req, res) => {
    console.log('default');
    youtubeFileRead((data) => {
        if(data) {
            // console.log('-------------------');
            // console.log(data.length);
            // console.log(data[0]);
            // res.send('true');
            res.render('table', {data: data, page: 1, leng: data.length-1, page_num: 50});
        } else {
            res.send('false');
        }
    });
});

// 이후에 페이징 번호시 실행하는 함수 
app.get('/table/viewcount/:page', (req, res) => {
    const page = req.params.page;
    // console.log(page);
    const viewCount = req.query.viewCount;
    console.log('view', req.query.viewCount);

    youtubeFileRead((data) => {
        if(data) {
            // console.log('-------------------');
            // console.log(data.length);
            // console.log(data[0]);
            // res.send('true');
            // const viewCount = req.query.viewCount;
            res.render('table', {data: data, page: page, leng: data.length-1, page_num: 50});
        } else {
            res.send('false');
        }
    });
});

// // 뷰 카운트 변경시 실행 함수
app.get('/table/viewCount', (req, res) => {
    const page = req.params.page;
    // console.log(page);
    const viewCount = req.query.viewCount;
    console.log('view', req.query.viewCount);

    console.log('viewcount');
    youtubeFileRead((data) => {
        if(data) {
            // console.log('-------------------');
            // console.log(data.length);
            // console.log(data[0]);
            // res.send('true');
            // const viewCount = req.query.viewCount;
            
            // res.render('table', {data: data, page: page, leng: data.length-1, page_num: viewCount});
            res.render('table', {data: data, page: page, leng: data.length-1, page_num: viewCount});
        } else {
            res.send('false');
        }
    });
});

app.listen(port, () => {
    console.log('server open : ', port);
});





function youtubeFileRead(cb) {
    const date = new Date();
    const fileName = './static/chart_data/Youtube/youtubeCharHour-' + date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2) + '-' + ('00' + date.getHours()).slice(-2) + '.json';
    // fs.readFile(fileName, 'utf8')
    // 나중에 사용예정, 지금은 파일 지정해서 사용
    fs.readFile('./static/chart_data/Youtube/youtubeChartHour-2022-12-14-17.json', 'utf8')
    .then((response) => {
        // 불러온 파일의 데이터를 json으로 다시 parse 작업 해준다.
        response = JSON.parse(response);
        // console.log(response.data);
        // console.log(response.data.length);
        // res.render('table2', {data: response});
        // res.render('table', {data: response, page: 1, leng: response.data.length, page_num: 100});
        cb(response.data);
    })
    .catch((err) => {
        res.send('에러 발생');
        throw err;
    });
}