//import express
const express = require('express');
//creation routeur
const router = express.Router();
// RECUPERATION MYSQL
const mysql = require('mysql');
//connection post DATABASE
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'w11xh&Suf',
  database: 'Groupomania',
});

//Utilisation router
//POST SINGUP
router.post('/signup', (req,res) =>{
    const email = req.body.email
    const password = req.body.password
   //inserer dan la database
   db.query(
       "INSERT INTO  user (email, password) VALUES (?,?)",
        [email, password], 
        (err,result)=> {
            console.log(err);
        }

   );
    res.json({ message: 'Votre requête a bien été reçue pour singup!' });
});
//POST LOGIN
router.post('/login', (req,res) =>{    const email = req.body.email
    const password = req.body.password
   //inserer dan la database
   db.query(
       "INSERT INTO  user (email, password) VALUES (?,?)",
        [email, password], 
        (err,result)=> {
            console.log(err);
        }

   );
    res.json({ message:email + 'Votre requête a bien été reçue pour login!' }); 
});

//export du router
module.exports = router;