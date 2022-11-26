const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// const upload = multer({
//     dest : 'uploads/'
// });

app.use('/uploads', express.static('uploads'));

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            // console.log(req.body);
            const ext = path.extname(file.originalname);
            const filename = req.body.id + ext;
            done(null, filename);
        }
    })
});

app.get('/', (req, res) => {
    res.render('file3');
});

app.post('/upload', upload.single('userfile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.render('result3', {data: req.file});
});


app.listen(port, () => {
    console.log('server open : ', port);
});
