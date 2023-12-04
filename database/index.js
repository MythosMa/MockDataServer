const mysql = require("./mysql");

const DATABASE = {
  mysql: "mysql",
  postgresql: "postgresql",
};

const USE_DATABASE = DATABASE.mysql;

const getDatabaseConnect = () => {
  switch (USE_DATABASE) {
    case DATABASE.mysql:
      return mysql.getConnection();
  }
};

module.exports = {
  getDatabaseConnect,
};
