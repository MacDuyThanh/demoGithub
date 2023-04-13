const express = require('express');
// const mysql = require('mysql');

const app = express();

// Create a MySQL connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'yourpassword',
//   database: 'yourdatabase'
// });

// Connect to the MySQL server
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL server');
// });

// Create an API endpoint
app.get('/users', (req, res) => {
//   const sql = 'SELECT * FROM users';
//   connection.query(sql, (err, results) => {
    // if (err) throw err;
    res.json("hello");
//   });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});