

// let test = {"startDate":"2022-10-01","endDate":"2022-11-30","timeUnit":"month","results":[{"title":"한글","keywords":["한글","korean"],"data":[{"period":"2022-10-01","ratio":100},{"period":"2022-11-01","ratio":85.88779}]},{"title":"영어","keywords":["영어","english"],"data":[{"period":"2022-10-01","ratio":18.85482},{"period":"2022-11-01","ratio":27.53036}]}]};

// console.log(test);

// let test2 = JSON.stringify(test, null, 2);

// console.log(test2);

// console.log(Date.now());
// let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());


const fs = require('fs');


let body = {"startDate":"2022-10-01","endDate":"2022-11-30","timeUnit":"month","results":[{"title":"한글","keywords":["한글","korean"],"data":[{"period":"2022-10-01","ratio":100},{"period":"2022-11-01","ratio":85.88779}]},{"title":"영어","keywords":["영어","english"],"data":[{"period":"2022-10-01","ratio":18.85482},{"period":"2022-11-01","ratio":27.53036}]}]};

let testFolder = './testupload';
let fileNum;
// 폴더 안에 파일 리스트 체크
fs.readdir(testFolder, function(error, filelist) {
    if(error) {
        throw error;
    }

    console.log(filelist);
    console.log(filelist.length);
    fileNum = filelist.length + 1;

    // 파일 번호 체크해서 파일명 뒤에 번호 붙이기
    let date = new Date();
    let formatDate = date.getFullYear() + '-' + ('00' + (date.getMonth())).slice(-2) + '-' + ('00' + date.getDate()).slice(-2) + '-searchResult';

    let fileName = './testupload/'+fileNum+'.json';
    fs.writeFile(fileName, body, (err) => {
        if(err) console.log(err);
        else {
            console.log('fs write success');
        }
    });
    
});