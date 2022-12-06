const express = require("express");
const controller = require("../controller/Cvisitor");
const controllerUser = require("../controller/Cuser");
const router = express.Router();

router.get("/visitor/", controller.visitor);
router.post("/visitor/register", controller.register);
router.delete("/visitor/delete", controller.delete);
router.get("/visitor/get_visitor", controller.get_visitor_by_id);
router.patch("/visitor/update", controller.update_visitor);


router.get("/", controllerUser.main);
router.get("/register", controllerUser.registerUserPage);
router.get("/login", controllerUser.loginPage);
router.post('/register', controllerUser.registerUser);
router.post('/login', controllerUser.login);
router.post('/mypage', controllerUser.mypage);
router.post('/mypage/edit', controllerUser.mypageEdit);
router.post('/mypage/delete', controllerUser.mypageDelete);

module.exports = router;
