import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

            
const NavBar = () =>{

    return(
        
         <div className="contenedor-nav">
             <h1 className='nombre-pagina'>PerfumArte</h1>
            <nav>
                <a>Inicio</a>
                <a>Ellos</a>
                <a>Ellas</a>
                <a>SALE!</a>
                <a>Contacto</a>
                <div class="animation start-home"></div>
            </nav>
            <CartWidget/>
        </div>
    )
}
    

export default NavBar;