const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);
router.get('/login', controller.loginPage);
router.get('/register', controller.registerPage);

router.post('/register', controller.register);
router.post('/login', controller.login);

router.post('/mypage', controller.mypage);
router.post('/mypage/edit', controller.mypage_edit);
router.post('/mypage/delete', controller.mypage_delete);

module.exports = router;
