const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const filename = file.originalname;
            done(null, filename);
        }
    })
});

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.render('file4');
});

app.post('/dynamicFile', upload.single('dynamic-userfile'), (req, res) => {
    console.log(req.file);
    res.send({path : req.file.path});
});

app.listen(port, () => {
    console.log('server open : ', port);
});

