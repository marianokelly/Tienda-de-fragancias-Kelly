import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        
        <div>
            <h1 className='titulo'>PerfumArte</h1>
            <div><img src="logo.JPG" alt="" /></div>
            <ul className='nav'>
                <a href="#">Ellas</a>
                <a href="#">Ellos</a>
                <a href="#">Unisex</a>
                <a href="#">Sale!</a>
            </ul>
        </div>
    );
}

export default NavBar;