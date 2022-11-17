// Promise 이용한 비동기 방식 실습
// setTImeout() 사용으로 인한 비동기 방식 코드 실습

function callpromise(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('사용자는 ' + id);
            resolve('call');
        }, 2000);
    });
}

function backpromise(msg) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('시작은 ' + msg);
            resolve('back');
        }, 1000);
    });
}

function hellpromise(msg) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('두번쨰는 ' + msg);
            resolve('세번째는 hell');
        }, 500);
    });
}


callpromise('kim promise')
.then(backpromise)
.then(hellpromise)
.then(function(msg) {
    console.log(msg);
});
