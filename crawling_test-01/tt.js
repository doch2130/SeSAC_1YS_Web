const fs = require('fs');


let testFolder = './testupload';
let fileNum;
// 폴더 안에 파일 리스트 체크
// fs.readdir(testFolder, function(error, filelist) {
//     if(error) {
//         throw error;
//     }

//     fileNum = filelist.length + 1;

//     // 파일 번호 체크해서 파일명 뒤에 번호 붙이기
//     let date = new Date();
//     let formatDate = date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2) + '-searchResult' + fileNum;

//     let fileName = './testupload/'+formatDate+'.json';
//     fs.writeFile(fileName, body, (err) => {
//         if(err) console.log(err);
//         else {
//             console.log('fs write success');
//         }
//     });
    
// });




// JSON 파일 읽어서 detail 링크 불러오기
// readFileSync 파일 읽는 명령어 (동기화 함수)
fs.readFile('./testFolder/test.json', 'utf8', (err, data) => {
    if(err) throw err;

    // json.parse로 파싱, 안해주면 데이터를 불러오지 못한다.
    const result = JSON.parse(data) 
    console.log(result.data);
    console.log(result.data[49].detailLink);

    let fsAppend = fs.openSync('./testFolder/test.json', 'a');
    let text = {"result.data[49]": '123'};
    fs.appendFileSync(fsAppend, text, 'utf8');
    if (fd !== undefined) {
        fs.closeSync(fd);
    }
    
});


// let fsAppend = fs.openSync('./testFolder/test.json', 'a');
// fs.appendFileSync(fsAppend, 'data to append', 'utf8');
// if (fd !== undefined) {
//     fs.closeSync(fd);
// }



