import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
     //hooks useState
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
    //fonction post
    function post() {axios.post('http://localhost:4250/api/auth/login',{
                //recuperation des element du formulaire
                email:email,
                password:password
            } )
            .then(response => console.log(response));
    };
                
    return (
       
        <div className="userForm">            
            <input id="email"  
                type="email" 
                placeholder="Adresse mail" 
                required="" 
                onChange = {(e) => {setEmail(e.target.value)}}
            />
            <br></br>
            <input id="password" 
                type ="password" 
                placeholder ="Mot de passe"
                onChange ={(e) => {setPassword(e.target.value)}}>
            </input>
            <br></br>
            {/*Button avec lancement fonction post*/}
            <button onClick={post}> Sing in</button>
            
        </div>
        
    );
};

export default UserForm;