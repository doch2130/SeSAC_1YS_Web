const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// app.get 처럼 사용하지만 뒤에 함수는 요청에 따라서 달라야 하기 떄문에 다르게 작성되는 것임
router.get('/', controller.main);

router.get('/login', controller.loginGet);
router.post('/login', controller.loginPost);

// 다른 파일에서 require() 함수를 이용해서
// 파일을 호출해서 사용하고 싶은 경우에는 해당 파일에서는 module.exports 를 사용해줘야 한다.
module.exports = router;



