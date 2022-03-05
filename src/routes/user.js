const express = require('express');
const router = express.Router();
const userRouters = require("../controller/user")

router.post("/user-register",async (...data) => userRouters.userRegister(...data))

router.post("/user-login",async (...data) => userRouters.loginUser(...data))

module.exports = router;
