var express = require("express");
var router = express.Router();

var mysqlRouter = require("./mysql");

router.use("/mysql", mysqlRouter);

module.exports = router;
