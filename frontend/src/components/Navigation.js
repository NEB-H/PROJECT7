import React from 'react';
//IMPORT NAVLINK
import { NavLink} from 'react-router-dom'; 
const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                S'identifier
            </NavLink>
            <NavLink exact to="/Singup" activeClassName="nav-active">
                S'enregister
            </NavLink>
            
        </div>
    );
};

export default Navigation;