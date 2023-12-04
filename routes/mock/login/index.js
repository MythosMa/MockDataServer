var express = require("express");
var router = express.Router();

const sqlConnection = require("../../../database/index").getDatabaseConnect();

const checkPassword = (req, res) => {
  const { userName, password } = req.body;
  if (userName && password) {
    const sqlStr = `SELECT * from user WHERE userName='${userName}' AND password='${password}'`;
    sqlConnection.query(sqlStr, (err, rows, fields) => {
      if (err) {
        res.createResponse(-1, err, []);
      } else if (!rows.length) {
        res.createResponse(-2, "用户名或密码错误", null);
      } else {
        res.createResponse(0, "success", {
          id: rows[0].id,
          userName: rows[0].userName,
          token: rows[0].token,
        });
      }
    });
  } else {
    res.createResponse(-9999, "参数错误", []);
  }
};

/* LOGIN */
router.post("/", function (req, res, next) {
  checkPassword(req, res);
});

module.exports = router;
