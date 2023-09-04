import React from 'react';
import './header.css';

function Header(){
    return(
        <div className='header'>
            <div className='headerContent'><h1 className='headerH1'>Jay<span>store</span></h1>
                <p className='headerContentP'>Welcome to JayStore, your online shopping destination
                 for quality products and great deals. Happy shopping!</p>
            </div>
        </div>
    );
}
export default Header;