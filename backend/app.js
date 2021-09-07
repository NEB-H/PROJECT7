//Recuperation express
const express = require('express')  
//app est une fonction express
const app =express()
//recuperer body parser pour transformer le a requete de json a java script
const bodyParser = require('body-parser');
//recuperer route user
const userRoutes = require('./routes/user');
//cors
 const cors = require('cors');
 app.use(cors());
 
// Connectionn DB
  //import Mysql
  const mysql = require('mysql');
  //Creation connection
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'w11xh&Suf',
    database: 'Groupomania',
  })
  // se connecter
  db.connect((err) => {
    if (err){
      throw err;
    }
    console.log('Connection à la BD reussie!')
  })


 //Utiliser bodyparser pour transformer des requete de json a objet java script 
 app.use(bodyParser.json())

//utilisation router user
app.use('/api/auth', userRoutes);

//export de l application pour y acceder depuis d'autre fichier
module.exports = app;
