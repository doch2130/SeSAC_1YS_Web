const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use("/static", express.static(__dirname+"/static"));

app.get('/', (req, res) => {
    res.render('index', {isLogin: true});
});

// app.get("/", function(req,res) {
//     res.render("view", {view: 'view2', a: 'abc'});
// });


app.get('/login', (req, res) => {
    // res.render('login');
})


app.get('/logindata', (req, res) => {
    res.send({gogogo: '1234'});
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/loginPage', (req, res) => {

    let fileName = './views/login.ejs';
    fs.readFile(fileName, 'utf8', async (err, data) => {
        if(err) throw err;

        // console.log(data);
        // res.send({data: data}, {islogin: '1234'});
        res.send(data);
        // res.json({data: data, isLogin: '1234'});

    });

});


app.listen(port, () => {
    console.log('server open : ', port);
});



