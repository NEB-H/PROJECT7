import React , { useState }from 'react';
import Navigation from "../components/Navigation";
import axios from "axios";



const Singup = () => {
    //hooks useState
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    //fonction post
    function post() {axios.post('http://localhost:4250/api/auth/signup',{
       
                //recuperation des element du formulaire
                email:email,
                password:password
            } )
            
            .then(response => (response));
    };
       
        return (
        <div className="singup">
            <header>
                <h2>Sing</h2>
                <Navigation/>
            </header>

            <main>
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
                <button onClick={post}> Singup</button>

            </div> 
                            
            </main>


            
      

        </div>
    );
};

export default Singup;