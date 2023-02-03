const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    passwoord:'root',
    database:'project'
})

module.exports = connection;