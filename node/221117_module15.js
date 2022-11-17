// callback 이용한 비동기 방식 실습
// setTImeout() 사용으로 인한 비동기 방식 코드 실습

function call(id, cb) {
    setTimeout(() => {
        console.log('사용자는 ' + id);
        cb('call');
    }, 2000);
}
function back(firstmsg, cb) {
    setTimeout(() => {
        console.log('시작은 ' + firstmsg);
        cb('back');
    }, 1000);
}
function hell(secondmsg, cb) {
    setTimeout(() => {
        console.log('두번쨰는 ' + secondmsg);
        cb('세번째는 hell');
    }, 500);
}


call('kim', function(firstmsg) {
    back(firstmsg, function(secondmsg) {
        hell(secondmsg, function(lastmsg) {
            console.log(lastmsg);
        });
    });
});

