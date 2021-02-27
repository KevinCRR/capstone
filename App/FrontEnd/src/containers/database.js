var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'dbuser',
    password: 'campx11',
    database: 'quickgig'
  })

  connection.connect()