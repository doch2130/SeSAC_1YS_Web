// search Trend api 호출
// 결과 값 받아서 데이터 출력
// json 파일로 자동 저장
// MVC 형식으로는 분류 안한 상태

const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');

// 일단 추가해보고 나중에 테스트
// app.set('json replacer', replacer); // JSON 문자열에 포함시킬 객체의 프로퍼티를 지정해주는 옵션
// app.set('json spaces', 2); // 들여쓰기 공백 수 지정

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/static', express.static(__dirname+'/static'));

app.get('/', test, (req, res) => {
    console.log('Hello');
    res.end('Hello');
});


function test() {
    var request = require('request');

    // var client_id = 'YOUR_CLIENT_ID';
    // var client_secret = 'YOUR_CLIENT_SECRET';
    var client_id = '02utbk0n54';
    var client_secret = '1ZaLqsgl6IOSv71fSqwMMsLrb28CTCqqQGIYLQvQ';

    var api_url = 'https://naveropenapi.apigw.ntruss.com/datalab/v1/search';
    var request_body = {
    startDate: '2022-01-01',
    endDate: '2022-12-01',
    timeUnit: 'month',
    keywordGroups: [
        {
        groupName: '멜론',
        keywords: ['멜론', 'melon', '멜론 차트', 'music', '뮤직 비디오'],
        },
        {
        groupName: '지니',
        keywords: ['지니', 'genie', '지니 차트', 'music', '뮤직 비디오'],
        },
        {
        groupName: '유튜브 뮤직',
        keywords: ['유튜브 뮤직', 'youtube music', '유튜브 뮤직 차트', 'music', '뮤직 비디오'],
        },
    ],
    };

    request.post(
    {
        url: api_url,
        body: JSON.stringify(request_body),
        headers: {
        'X-NCP-APIGW-API-KEY-ID': client_id,
        'X-NCP-APIGW-API-KEY': client_secret,
        'Content-Type': 'application/json',
        },
    },
    function(error, response, body) {
        if(error) {
            throw error;
        }

        console.log(response.statusCode);
        console.log(body);

        // 여기 부터는 내가 수정하는 코드
        // 보기 좋게 정렬 후 json 데이터 저장하려고 했으나, 방법이 없음...
        // 결과 값 json 파일에 저장 (추가 작업 X)
        // 상태코드 200이면 파일 저장
        if(response.statusCode == 200) {
            let testFolder = './testupload';
            let fileNum;
            // 폴더 안에 파일 리스트 체크
            fs.readdir(testFolder, function(error, filelist) {
                if(error) {
                    throw error;
                }

                fileNum = filelist.length + 1;

                // 파일 번호 체크해서 파일명 뒤에 번호 붙이기
                let date = new Date();
                let formatDate = date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2) + '-searchResult' + fileNum;

                let fileName = './testupload/'+formatDate+'.json';
                fs.writeFile(fileName, body, (err) => {
                    if(err) console.log(err);
                    else {
                        console.log('fs write success');
                    }
                });
                
            });
        }
    }
    );
}

app.listen(port, () => {
    console.log('server open : ', port);
});



// const express = require('express');
// const app = express();
// const port = 8080;

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

// app.use('/static', express.static(__dirname+'/static'));


// const router = require('./routes');

// app.use('/', router);

// app.get('*', (req, res) => {
//     res.send('주소를 확인해 주세요.');
// });


// app.listen(port, () => {
//     console.log('server open : ', port);
// });
