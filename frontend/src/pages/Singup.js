import React from 'react';
import Navigation from '../components/Navigation';
import UserForm from '../components/UserForm';

const Singup = () => {
        return (
        <div className="singup">
            <header>
                <h2>Sing</h2>
                <Navigation/>
            </header>
            
            <main>
                <UserForm/>
            </main>


        </div>
    );
};

export default Singup;