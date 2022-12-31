const express = require("express");
const controllerUser = require("../controller/Cuser");
const router = express.Router();

router.get("/", controllerUser.main);
// router.get("/register", controllerUser.registerUserPage);
router.get("/login", controllerUser.loginPage);
router.post('/register', controllerUser.registerUser);
router.post('/login', controllerUser.login);
router.delete('/logout', controllerUser.logout);
router.post('/mypage', controllerUser.mypage);
router.post('/mypage/edit', controllerUser.mypageEdit);
router.post('/mypage/delete', controllerUser.mypageDelete);

module.exports = router;
