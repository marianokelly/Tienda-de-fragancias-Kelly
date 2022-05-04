import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from './img/logo.JPG';
import './NavBar.css';


            
const NavBar = () =>{

    return(
        <>
         <div className="contenedor-nav">
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Ellos</a>
                <a href="#">Ellas</a>
                <a href="#">SALE!</a>
                <a href="#">Contacto</a>
                <div class="animation start-home"></div>
            </nav>
            <CartWidget/>
        </div>
        </>
    )
    };

    

export default NavBar;