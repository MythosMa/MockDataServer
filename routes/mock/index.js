var express = require("express");
var router = express.Router();

/* MOCK */

// login
var loginRouter = require("./login/index");

router.use("/login", loginRouter);

module.exports = router;
