// Genie는 푸피터 + 체리오를 사용해야 한다.
// 디테일 페이지에서는 푸피터는 사용안해도 가능하며, 체리오만 사용한다, 대신 axios를 사용한다.

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/static', express.static(__dirname+'/static'));

app.get('/', async (req, res) => {

    let lists;
    // JSON 파일 읽어서 detail 링크 불러오기
    // readFile 파일 읽는 명령어
    fs.readFile('./testFolder/test2.json', 'utf8', async (err, data) => {
        if(err) throw err;

        // json.parse로 파싱, 안해주면 JSON 데이터를 불러오지 못한다.
        const result = JSON.parse(data);
        // console.log(result.data);
        console.log(result.data.length);
        // console.log(result.data[49].detailLink);

        // JSON에 데이터 추가하기
        lists = result.data;
        console.log(lists);
        // lists[0].test = 'test123';
        // console.log(lists[0].title);
        console.log(lists[0]);

        for (i = 0; i < lists.length; i++) {
            const url = lists[i].detailLink;

            // console.log({i, url});

            await axios({
                method: 'get',
                url: url,
                // iconv 디코딩을 사용하려면 arraybuffer 타입으로 받아야 한다.
                // responseType: "arraybuffer"
            }).then((response) => {
                // console.log(response.data);

                const $ = cheerio.load(response.data);

                const list = $("#body-content > div.song-main-infos > div.aside-zone.daily-chart > div.total");
                const total = $(list).find("div:nth-child(2) > p").text();

                console.log(i, {
                    total
                });

                lists[i].totalNumPlay = total;
                console.log(lists[i]);
            }).catch(err => {
                console.log(err);
            });
        }
        console.log('tttttttttttt');
        // console.log(lists[0]);

        let test = {};
        test.data = [];

        for(i = 0; i < lists.length; i++) {
            test.data.push(lists[i]);
        }

        console.log('final');
        console.log(test);




        fs.writeFile('./testFolder/test3.json', JSON.stringify(test, null, '\t'), (err) => {
            if(err) console.log(err);
            else {
                console.log('Genie fs write success');
            }
        });

    });


    




    res.send(true);
    
})


app.listen(port, () => {
    console.log('server open: ', port);
});

