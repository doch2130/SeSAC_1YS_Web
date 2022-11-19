
function login(id, pw) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('사용자 입장');
            resolve(id);
        }, 3000);
    });
}

function getVideo(id) {
    return new Promise(function(resolve, rejcet) {
        setTimeout(function() {
            console.log(id + '의 비디오 리스트');
            resolve(['아바타', '라라랜드']);
        }, 2000);
    });
}

function getDetail(videos) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(videos[0]);
            // resolve(videos);
        }, 1000);
    });
}

// login('kim', '1234')
// .then(getVideo)
// .then(getDetail)
// .then(function(video) {
//     console.log('비디오 제목 : ' + video);
// });


login('kim', '1234')
.then(function(id) {
    console.log('user : ', id);
    return getVideo(id);
})
.then(function(videos) {
    console.log('videos : ', videos);
    return getDetail(videos);
    // return getDetail(videos[0]);
})
.then(function(video) {
    console.log('비디오 제목 : ' + video);
});
