
// new Promise(function(resolve, reject) {
    // resolve : 함수형태, 성공했을 때 실행할 친구
    // reject : 함수형태, 실패 or 에러를 처리할 때 사용되는 친구
// });

function func3(flag) {
    return new Promise(function(resolve, reject) {
        if (flag) {
            resolve('flage는 true');
        } else {
            reject('flage는 flase');
        }
    });
}

// then 안에 1번 함수(resolve), 2번 함수(reject)로 나눠서 쓰는 방법이 있다.
// func3(false).then(
//     function(msg) {
//         console.log('msg1 : ', msg);
//     },
//     function(msg) {
//         console.log('msg2 : ', msg)
//     }
// );


// then 안에 (resolve)만 작성하고, catch(rejcet) 를 나눠서 작성하는 방법
func3(false).then(
    function(msg) {
        console.log('msg1 : ', msg);
    },
).catch(
    function(msg) {
        console.log('msg2 : ', msg)
    }
);


// then 안에 1번(resolve), 2번(reject), catch(rejcet) 가 전부 있는 경에 reject 값은 then에 있는 msg2 만 출력이 되고 catch는 무시된다.
func3(false).then(
    function(msg) {
        console.log('msg1 : ', msg);
    },
    function(msg) {
        console.log('msg2 : ', msg)
    }
).catch(
    function(msg) {
        console.log('msg3 : ', msg)
    }
);
