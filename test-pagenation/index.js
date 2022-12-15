const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use("/static", express.static(__dirname+"/static"));

app.get('/', (req, res) => {
    let boardList = [
        {no:1, subject:"테스트 제목1", content:"테스트 내용1", writer:"testid1", writedate:"2021-08-09 13:00:00"},
        {no:2, subject:"테스트 제목2", content:"테스트 내용2", writer:"testid2", writedate:"2021-08-09 13:10:00"},
        {no:3, subject:"테스트 제목3", content:"테스트 내용3", writer:"testid3", writedate:"2021-08-09 13:20:00"},
        {no:4, subject:"테스트 제목4", content:"테스트 내용4", writer:"testid1", writedate:"2022-03-26 14:00:00"},
        {no:5, subject:"테스트 제목5", content:"테스트 내용5", writer:"testid2", writedate:"2022-03-26 15:10:00"},
        {no:6, subject:"테스트 제목6", content:"테스트 내용6", writer:"testid3", writedate:"2022-03-26 16:20:00"},
        {no:7, subject:"테스트 제목7", content:"테스트 내용7", writer:"testid1", writedate:"2022-03-26 17:30:00"},
        {no:8, subject:"테스트 제목8", content:"테스트 내용8", writer:"testid2", writedate:"2022-03-26 18:40:00"},
        {no:9, subject:"테스트 제목9", content:"테스트 내용9", writer:"testid3", writedate:"2022-03-26 19:50:00"},
        {no:10, subject:"테스트 제목10", content:"테스트 내용10", writer:"testid1", writedate:"2022-03-26 21:00:00"},
        {no:11, subject:"테스트 제목11", content:"테스트 내용11", writer:"testid2", writedate:"2022-03-26 22:10:00"},
        {no:12, subject:"테스트 제목12", content:"테스트 내용12", writer:"testid3", writedate:"2022-03-26 23:20:00"},
        {no:13, subject:"테스트 제목13", content:"테스트 내용13", writer:"testid1", writedate:"2022-03-27 00:30:00"}
    ];

    console.log("REST API Get Method - Read All");
	// 페이지 크기
	var countPerPage = req.query.countperpage;
	// 페이지 번호
	var pageNo = req.query.pageno;
	
	if (countPerPage == undefined || typeof countPerPage == "undefined" || countPerPage == null) {
		countPerPage = 10;
	} else {
		countPerPage = parseInt(countPerPage);
	}
	if (pageNo == undefined || typeof pageNo == "undefined" || pageNo == null) {
		pageNo = 0;
	} else {
		pageNo = parseInt(pageNo);
	}
	
	if (pageNo > 0) {
		// 전체 크기
		var totalCount = boardList.length;
		// 시작 번호
		var startItemNo = ((pageNo - 1) * countPerPage);
		// 종료 번호
		var endItemNo = (pageNo * countPerPage) - 1;
		// 종료 번호가 전체 크기보다 크면 전체 크기로 변경
		if (endItemNo > (totalCount - 1)) {
			endItemNo = totalCount - 1;
		}
		var boardPageList = [];
		if (startItemNo < totalCount) {
			for (var index = startItemNo; index <= endItemNo; index++) {
				boardPageList.push(boardList[index]);
			}
		}
		res.json({success:true, data:boardPageList});
	} else {
		res.json({success:true, data:boardList});
	}
});



app.listen(port, () => {
    console.log('server open : ', port);
});





