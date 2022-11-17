const url = require('url');

console.log(url);
console.log(url.parse);
var obj = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%83%88%EC%8B%B9');
console.log(obj);
console.log(url.format(obj));

console.log(obj.protocol);

var string = new url.URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%83%88%EC%8B%B9');
console.log(string);

//  url의 ? 뒤에 있는 arg 값을 보여줌
// searchParams: URLSearchParams {
//     'where' => 'nexearch',
//     'sm' => 'top_hty',
//     'fbm' => '1',
//     'ie' => 'utf8',
//     'query' => '새싹' }

console.log(string.searchParams.getAll('where'));

var string2 = new url.URL('http://localhost?name=sesac&name=코딩온&age=19');
console.log(string2.searchParams.getAll('name'));
// arg 값중에서 name key를 가지고 있는 값들을 전부 출력, sesac, 코딩온
console.log(string2.searchParams.keys());
// arg 값 중에서 key를 전부 출력, name, name, age
string2.searchParams.append('age', '20');
// arg 값에 age key로 20 값 추가
console.log(string2.searchParams.getAll('age'));
// arg 값 중에서 age key를 가지고 있는 갑 전부 출력, 19, 20
console.log(string2.searchParams.has('abc'));
// arg 값 중에서 abc key가 있는지 체크하며 true or false 반환 => false
console.log(string2.searchParams.has('age'));
// true
