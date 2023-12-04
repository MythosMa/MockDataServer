var express = require("express");
var router = express.Router();
var connection = require("../../database/mysql");

const getDatabaseTest = (sql, calblack) => {
  const con = connection.getConnection();
  con.query(sql, calblack);
};

const getTestDatas = (res) => {
  getDatabaseTest("SELECT * FROM test",(err, rows, fields) => {
    if (err) {
      res.createResponse(-1, err, []);
    } else {
      res.createResponse(0, "Operation successful", rows);
    }
  });
};

/* LOGIN */
router.post("/", function (req, res, next) {
  getTestDatas(res);
});

module.exports = router;
