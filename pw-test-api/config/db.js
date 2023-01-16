const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"pw_test_matias_harding",
})

module.exports = db;