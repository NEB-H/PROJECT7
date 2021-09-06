import React from 'react';
import Navigation from "../components/Navigation";
import UserForm from '../components/UserForm';



const Login = () => {
   

    return (
        <div className = "login">
            <header>
                <h1>LOGIN</h1>
                <Navigation/>
            </header>

            <main>
                <UserForm/>            
            </main>
            
            
            
        </div>
    );
};

export default Login;