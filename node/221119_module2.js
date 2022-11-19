
// new Promise(function(resolve, reject) {
// });


function func1() {
    return new Promise(function(resolve, reject) {
        resolve('성공');
    });
}
function func2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {resolve('성공');}, 1000);
    });
}

// var a = func1();
// console.log(a);

func1().then(function(result) {
    console.log('result : ', result);
});

func2().then(function(result) {
    console.log('result2 : ', result);
});

// var b = func2();
// console.log(b);


func2().then(function(result) {
    console.log('result3 : ', result);
    return 'a';
}).then(function(abc) {
    console.log('abc : ', abc);
});
