require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB
  });

app.use(cors())

app.get("/users", (req, res, next) => {
    connection.query(
        'SELECT * FROM `users`',
        function(err, results, fields) {
            res.json(results)
        }
      );
})

app.listen(5000, () => {
    console.log("start server on port 5000")
})