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

app.get('/table', (req, res) => {
	youtubeFileRead((data) => {
        if(data) {
            // 파일에서 읽어온 데이터를 전달
            res.render('table', {data: data});
        } else {
            res.send('false');
        }
    });
});

app.get('/read', (req, res) => {
    youtubeFileList((filelist) => {
        console.log(filelist);
        res.render('read', {filelist: filelist});
    });
    
});


function youtubeFileList(cb) {
    fs.readdir('./static/chart_data/Youtube')
    .then((filelist) => {
        const lastFile = filelist.length - 1;
        // 'youtubeChartHour-2022-12-16-17.json' => 2022-12-16-17
        // console.log(filelist[lastFile].slice(17, -5));
        // 2022-12-16
        // console.log(filelist[lastFile].slice(17, -8));

        const date = new Date();
        // 비교용 날짜, ex) 2022-12-17
        const compareDate = date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2);

        // 임시 변수 설정 (현재 날짜 파일 저장 변수)
        const temp = [];

        // 리스트에서 현재 날짜 파일만 추출
        filelist.forEach((file, index) => {
            if(compareDate == file.slice(17, -8)) {
                console.log('b: ', file.slice(17, -8));
                temp[index] = file;
            }
        });
        // 00시 이후 크롤링 실행 전인 경우 현재 날짜 파일이 없을 수 있으므로, 제일 최신 파일 저장
        if(temp.length == 0) {
            temp[0] = filelist[lastFile];
        }
        
        // temp 리스트 내부의 undefined 값 제거
        for(let i = 0; i < temp.length; i++){ 
            if (temp[i] === undefined) { 
              temp.splice(i, 1); 
              i--; 
            }
        }
        cb(temp);
    })
    .catch((err) => {
        throw err;
    });
}









// json 파일 읽어오는 함수
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
        cb(response.data);
    })
    .catch((err) => {
        // res.send('에러 발생');
        throw err;
    });
}




app.listen(port, () => {
    console.log('server open : ', port);
});
