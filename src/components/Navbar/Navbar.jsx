import React from "react";
import {NavLink} from "react-router-dom" //Evita que se reenvié el formulario

const Navbar = () => {

    return(
        
        <nav className="navbar">
            <section className="navbar-brand">

                <img src="" className="PhotoProfile" />
                <h1>Portafolio</h1>

            </section>
            <ul>
                <li><NavLink className='nombre_classname' to='/'>Home</NavLink></li>
                <li><NavLink to={'/AboutMe'}>InfoPersonal</NavLink></li>
                <li><NavLink to={'/Skills'}>InfoAdicional</NavLink></li>
            </ul>
        </nav>
        
    )
}

export default Navbar;
