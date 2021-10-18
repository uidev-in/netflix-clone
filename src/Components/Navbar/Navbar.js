import React from 'react';
import "../Navbar/navbar.css";

function Navbar(){
    return(
        <>
            <nav>
                <img className="logo" src="https://cdn.worldvectorlogo.com/logos/netflix-4.svg" 
                    alt="netflix-logo"/>
                <img className="avatar-img" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="avatar-image" />
            </nav>
        </>
    )
}

export default Navbar;