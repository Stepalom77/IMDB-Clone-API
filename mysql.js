var mysql = require('mysql2');

var conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: true
  }
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Succesfully connected to PlanetScale!");
  process.exit(0)
});