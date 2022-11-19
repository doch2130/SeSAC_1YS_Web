const fs = require('fs');

fs.readFile('./test.txt', function(err, data) {
    if(err) {
        throw err;
    }
    console.log('data : ', data);
    console.log('data2 : ', (String(data)));
    console.log('data3 : ', data.toString());
});

const fs2 = require('fs').promises;
// promises 함수를 사용할 수 있게 됨

fs2.readFile('./test.txt')
    .then((data) => {
        console.log('promise - data : ', data);
    });

// writeFile 함수는 resolve 값을 보내지 않아서 다음 함수에서 msg 변수로 읽는 방법이 없다.
fs2.writeFile('./write.txt', 'sesac')
    .then(function() {
        return fs2.readFile('./write.txt');
    })
    .then(function(data) {
        console.log(data.toString());
    });

fs.writeFile('./write2.txt', 'codingon', function(err) {
    if(err) {
        throw err;
    }
    console.log('write2File success!');
    fs.readFile('./write2.txt', function(err, data) {
        if(err) {
            throw err;
        }
        console.log('write2File data : ', data.toString());
    })
});

