exports.hello = function() {
    return 'helloTest';
}

// Arrow 방식으로 작성해도 상관 없음
// exports.hello = () => {
//     return 'hello';
// }


// 나중에 DB에서 값을 가져올 때 이렇게 배열로 가져올 수 있다는 예시
exports.test = function() {
    return [
        { id: 'a', name: '새싹'},
        { id: 'b', name: '용산'}
    ];
}