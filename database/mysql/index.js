var mySql = require("mysql");

const MySQLConfig = {
  host: "localhost",
  user: "MythosMa",
  password: "Mayuan112233",
  database: "mockdatabase",
};

let connection = null;

const connectionStart = () => {
  connection = mySql.createConnection(MySQLConfig);
  connection.connect();
};

const connectionEnd = () => {
  if (connection) {
    connection.end();
    connection = null;
  }
};

const getConnection = () => {
  if (!connection) {
    connectionStart();
  }
  return connection;
};

module.exports = {
  getConnection,
  connectionEnd,
};
