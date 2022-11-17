// setTImeout() 사용으로 인한 비동기 방식 코드

function login(id, pw, cb) {
    setTimeout(() => {
        console.log('사용자');
        cb(id); // 콜백 함수
    }, 3000);
}
function getVideo(id, cb) {
    setTimeout(function() {
        console.log(id + '의 비디오 리스트');
        cb( ['아바타', '라라랜드']);
    }, 2000);
}
function getDetail(video, cb) {
    setTimeout(() => {
        cb('비디오 제목 : ' + video);
    }, 1000);
}

// 콜백 함수를 이용한 순서 강제 설정
login('kim', '1234', function(user) {
    // console.log(user);
    getVideo(user, function(videos) {
        // console.log('videos : ', videos);
        getDetail(videos[0], function(msg) {
            console.log(msg);
        });
    });
});


// 위에는 비동기 방식 코드

// 동기 방식 코드
// function login(id, pw, cb) {
//     console.log("사용자 입장");
//     return id;
// }
// function getVideo(id, cb) {
//     console.log( id + "의 비디오 리스트");
//     return ['아바타', '라라랜드'];
// }
// function getDetail(video, cb) {
//     return "비디오 제목 : " + video;
// }
// let user = login('kim', '1234');
// let videos = getVideo(user);
// let msg = getDetail(videos[0]);
// console.log(msg);
