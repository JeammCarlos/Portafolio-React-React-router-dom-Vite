import React from "react";
import {NavLink} from "react-router-dom" //Evita que se reenvié el formulario
import "../../stylesheets/navbar.css";

const Navbar = () => {

    return(
        
        <nav className="navbar">
            <section className="navbar-brand">

                <img src="../src/images/foto_cv_lc_es_4.JPG" className="PhotoProfile" />
                <h1>PORTAFOLIO</h1>

            </section>
            <ul className='nombre_classname_ul'>
                <li><NavLink className='nombre_classname' to='/'>Home</NavLink></li>
                <li><NavLink className='nombre_classname' to={'/AboutMe'}>InfoPersonal</NavLink></li>
                <li><NavLink className='nombre_classname' to={'/Skills'}>InfoAdicional</NavLink></li>
            </ul>
        </nav>
        
    )
}

export default Navbar;
