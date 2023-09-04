import React from 'react';
import './nav.css';

function NavBar(){
    return (
        <div>
            <ul className='nav'>
                <li>
                    <a href='home.js'>Home</a>
                </li>
                <li>
                    <a href='cloth.js'>Cloth</a>
                </li>
                <li>
                    <a href='Graget.js'>Graget</a>
                </li>
                <li>
                    <a href='phone.js'>Phones</a>
                </li>
                <li>
                    <a href='cart.js'>Cart</a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;