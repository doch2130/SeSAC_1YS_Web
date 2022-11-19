const fs = require('fs').promises;

fs.writeFile('./sesac.txt', "반갑습니다.")
.then(function(err) {
    if(err) throw err;
    console.log('writeFile 생성');
    return fs.copyFile('./sesac.txt', './sesac2.txt');
})
.then(function(err) {
    if(err) throw err;
    console.log('copyFile success');
    return fs.rename('./sesac2.txt', './new.txt');
})
.then(function(err) {
    if(err) throw err;
    console.log('sesac2 => new');
});

