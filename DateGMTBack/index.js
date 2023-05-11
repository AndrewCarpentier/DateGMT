const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");

const app = express();
const http = require("http");
const server = http.createServer(app);

const cors = require("cors");
const port = 8000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "date",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL");
});

// Middleware pour gérer les requêtes JSON
app.use(bodyParser.json());

// Middleware pour éviter les problèmes de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/', (req, res)=>{
  connection.query('SELECT * FROM date ORDER BY id DESC', (err, result)=>{
    if(err) throw err;
    console.log({date :result[0].date})
    res.send([result[0]])
  });
});

app.post('/', (req,res)=>{
  const {date} = req.body;
  connection.query('INSERT INTO date (date) VALUES (?)', [date.toString()], (err,result)=>{
    if(err) throw err;
    res.send(result.affectedRows === 1)
  });
});

// Lancement du serveur Node.js
app.listen(port, () => {
  console.log(`Serveur Node.js écoutant sur le port ${port}`);
});
