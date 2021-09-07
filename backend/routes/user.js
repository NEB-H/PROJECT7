//import express
const express = require('express');
//creation routeur
const router = express.Router();
// RECUPERATION MYSQL
const mysql = require('mysql');
//import bcrypt
const bcrypt = require ('bcrypt');
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
    /*recuperation  saisie*/
    const email = req.body.email
    const password = req.body.password
    
   //inserer dans la database
   db.query(
       //inserer les data
       "INSERT INTO  user (email, password) VALUES (?,?)",
        [email, password], 
        (err,result)=> {
            //si email existe pas (pas d'erreur)
            if (!err){
                res.status(201).json({ message: 'Utilisateur créé!' })
            }
            else{
                res.status(400).json({ errr:err })
            }
           // res.send({err: err}); 

        }

   );
});

//export du router
module.exports = router;