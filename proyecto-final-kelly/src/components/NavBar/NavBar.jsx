import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from './img/logo.JPG';
import './NavBar.css';

function NavBar(props) {
    return (
        
        <div>
            <img src={logo} alt="" />
            <ul className='nav'>
                <a href="#">Ellas</a>
                <a href="#">Ellos</a>
                <a href="#">Unisex</a>
                <a href="#">Sale!</a>
            </ul>
            <CartWidget />

        </div>
    );
}

export default NavBar;