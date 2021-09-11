import React from 'react';
//IMPORT NAVLINK
import { NavLink} from 'react-router-dom'; 
const NavigationSession = () => {
    return (
        <div className="navigation_session">
            <div className="nav_session">
            <NavLink exact to="/Home" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/CreatePost" activeClassName="nav-active">
                Partager un gif
            </NavLink>
            </div>
                  
            <div className="control_session">
                <button className="btn_logout">Se deconnecter</button>
                <button className="btn_deleteAccount">Suprimer mon compte</button>

            </div>
            
        </div>
    );
};

export default NavigationSession;