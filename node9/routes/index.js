const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.visitor);

router.post('/register', controller.register);



module.exports = router;
