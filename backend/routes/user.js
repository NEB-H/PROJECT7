//import express
const express = require('express');
//creation routeur
const router = express.Router();
// RECUPERATION MYSQL
const mysql = require('mysql');
//import de bcrypt
const bcrypt = require('bcrypt') ;
const saltRounds = 10;
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
    
    console.log(password)
    bcrypt.hash (password,saltRounds,(err,hash) =>{
       
        
        if (err) {
            console.log(err)
        }
        //inserer dans la database
      
        db.query(
         //inserer les data
         "INSERT INTO  user (email, password) VALUES (?,?)",
          [email, hash], 
          (result)=> {
              //si email existe pas 
              if (!result){
                  res.status(201).json({ message: 'Utilisateur créé!' })
              }
              else{
                  res.status(400).json({ message:'user already exist' })
              }
             // res.send({err: err}); 
          
          }
        );

    })
});

// LOGIN
router.post('/login', (req,res) =>{   
    /*recuperation des saisi*/    
    const email = req.body.email
    const password = req.body.password

    db.query(
    //verification email
    "SELECT * FROM  user WHERE email = ? ",
     [email], 
     (err,user)=> {
         //SI une erreur
         if (err){
             res.send({err:err}); 
         } 
         console.log(user[0].password)
         console.log(password)
         //Si on trouve le mail 
         if (user){             
             bcrypt.compare(password, user[0].password)
             .then(valid => {
                console.log(valid)
                // si compare true
                 if(valid) {
                     res.status(201).json({message: "Mot de passe correct"}); 
                  //si compare false     
                 } else {
                    res.status(401).json({message: "Mot de passe incorrect"}); 
                 }
             })
                 
             } else  {
                res.send({message:"Cette utilisateur n'existe pas"})

             }
         }
   
    );
 
});

//export du router
module.exports = router;