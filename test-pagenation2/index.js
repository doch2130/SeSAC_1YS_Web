const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use("/static", express.static(__dirname+"/static"));

app.get('/', (req, res) => {
	res.render('index');
});




app.get('/table', (req, res) => {
	youtubeFileRead((data) => {
        if(data) {
            // console.log('file data length: ', data.length);
			console.log(req.params);
			console.log(req.query);
			console.log(req.query.num);

			// paging(req.params.page, data.length)
			paging(req.query.num, data.length)
			.then((response) => {
				console.log(response);
				res.render('table', {data: data, data2: response});
			});
			// console.log('paging : ', result);



            // const viewCount = req.query.viewCount;
            // res.render('table', {data: data, page: page, leng: data.length-1, page_num: viewCount});
			
			// res.send('true');
        } else {
            res.send('false');
        }
    });

	
})





// curPage 에는 req.query.url 값을 받아야할듯 / page=3

// 페이징 함수 
// export async function paging(curPage, totalRowCount) {
async function paging(curPage, totalRowCount) {
	// 페이지당 게시물 수 
	let page_size = 10;
	// 보여지는 페이지의 갯수 : 1 ~ 5 페이지
	let page_list_size = 3;
	// limit 변수 (DB에서 가져올 게시물 수 no~ 
	let no = 33;
  
	// 인자로 받은 현재 페이지 번호  
	if(curPage == null || curPage == undefined) {
		curPage = 1;
	} else {
		curPage = Number(curPage)
	}

	// url 조작 방지
	if (curPage <= 0) {
	  no = 0;
	  curPage = 1;
	}  
	else no = (curPage - 1) * page_size;
  
	// 전체 페이지 갯수 
	if (totalRowCount < 0) totalRowCount = 0;
	// 전체 페이지 수 
	let totalPage = Math.ceil(totalRowCount /  page_size);

	// url 조작 방지2
	// totalPage 보다 더 큰 curPage가 호출되면 에러 발생시키기
	if (totalPage < curPage) {
	  no = 0;
	  curPage = 1 
	}
  
	let startPage = ((curPage - 1) * page_list_size) + 1; // 시작 페이지 계산
	let endPage = (startPage + page_list_size) - 1; // 마지막 페이지 계산
  
	let result = {
	  "curPage": curPage,
	  "page_list_size": page_list_size,
	  "page_size": page_size,
	  "totalPage": totalPage,
	  "startPage": startPage,
	  "endPage": endPage,
	  "no": no
	}
  
	return result;
  }
  





app.get('/', (req, res) => {
    res.render('index');
});

app.get('/test', (req, res) => {
	youtubeFileRead((data) => {
        if(data) {
            res.render('test', {data: data});
        } else {
            res.send('false');
        }
    });
});



// 처음 url 접속시 실행 함수
app.get('/tableasdsada', async (req, res) => {
    console.log('default');
    youtubeFileRead((data) => {
        if(data) {
            // console.log('-------------------');
            // console.log(data.length);
            // console.log(data[0]);
            // res.send('true');
            res.render('table', {data: data, page: 1, leng: data.length-1, page_num: 50});
        } else {
            res.send('false');
        }
    });
});

// 이후에 페이징 번호시 실행하는 함수 
app.get('/tableasda/viewcount/:page', (req, res) => {
    const page = req.params.page;
    // console.log(page);
    const viewCount = req.query.viewCount;
    console.log('view', req.query.viewCount);

    youtubeFileRead((data) => {
        if(data) {
            // console.log('-------------------');
            // console.log(data.length);
            // console.log(data[0]);
            // res.send('true');
            // const viewCount = req.query.viewCount;
            res.render('table', {data: data, page: page, leng: data.length-1, page_num: 50});
        } else {
            res.send('false');
        }
    });
});

// // 뷰 카운트 변경시 실행 함수
app.get('/tablasdase/viewCount', (req, res) => {
    const page = req.params.page;
    // console.log(page);
    const viewCount = req.query.viewCount;
    console.log('view', req.query.viewCount);

    console.log('viewcount');
    youtubeFileRead((data) => {
        if(data) {
            // console.log('-------------------');
            // console.log(data.length);
            // console.log(data[0]);
            // res.send('true');
            // const viewCount = req.query.viewCount;
            
            // res.render('table', {data: data, page: page, leng: data.length-1, page_num: viewCount});
            res.render('table', {data: data, page: page, leng: data.length-1, page_num: viewCount});
        } else {
            res.send('false');
        }
    });
});





function youtubeFileRead(cb) {
    const date = new Date();
    const fileName = './static/chart_data/Youtube/youtubeCharHour-' + date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2) + '-' + ('00' + date.getHours()).slice(-2) + '.json';
    // fs.readFile(fileName, 'utf8')
    // 나중에 사용예정, 지금은 파일 지정해서 사용
    fs.readFile('./static/chart_data/Youtube/youtubeChartHour-2022-12-14-17.json', 'utf8')
    .then((response) => {
        // 불러온 파일의 데이터를 json으로 다시 parse 작업 해준다.
        response = JSON.parse(response);
        // console.log(response.data);
        // console.log(response.data.length);
        // res.render('table2', {data: response});
        // res.render('table', {data: response, page: 1, leng: response.data.length, page_num: 100});
        cb(response.data);
    })
    .catch((err) => {
        // res.send('에러 발생');
        throw err;
    });
}






app.listen(port, () => {
    console.log('server open : ', port);
});