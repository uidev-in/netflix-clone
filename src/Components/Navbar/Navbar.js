import React, {useState, useEffect} from 'react';
import "../Navbar/navbar.css";

function Navbar(){
    const [show, handelShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handelShow(true);
            }else{
                handelShow(false);
            }
        });
        return()=>{
            window.removeEventListener("scroll");
        }

    }, [])
    return(
        <>
            <nav className={`${show && 'sticky_nav'} `}>
                <img className="logo" src="https://cdn.worldvectorlogo.com/logos/netflix-4.svg" 
                    alt="netflix-logo"/>
                <img className="avatar-img" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="avatar-image" />
            </nav>
        </>
    )
}

export default Navbar;