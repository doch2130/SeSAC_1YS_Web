const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// router.get('/', controller.visitor);
// router.post('/register', controller.register);

// router.delete('/delete', controller.delete);
// router.get('/get_visitor', controller.get_visitor_by_id);
// router.patch('/update', controller.update_visitor);

router.get('/', controller.main);
router.get('/login.ejs', controller.loginPage);
router.get('/register.ejs', controller.registerPage);

router.post('/register', controller.register);
router.post('/login', controller.login);

router.post('/mypage', controller.mypage);
router.post('/mypage/edit', controller.mypage_edit);
router.post('/mypage/delete', controller.mypage_delete);

module.exports = router;
