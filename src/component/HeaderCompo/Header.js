import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () =>{
    const [clicked, setClicked] = useState(false);

    const handleClicked = () => {
        setClicked(!clicked);
    }

    return(
        <>
        <div className='headerBody'>
            <div className='headerTop'>
                <div className='headerTopList'>
                    <ul className='headerTopUnorder'>
                        <li>
                            <a href='/'>Best Sellers</a>
                        </li>
                        <li>
                            <a href='/'>Gift Ideas</a>
                        </li>
                        <li>
                            <a href='/'>New Releases</a>
                        </li>
                        <li>
                            <a href='/'>Today's Deals</a>
                        </li>
                        <li>
                            <a href='/'>Customer Service</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='headerContent'>
                <header className='header'> Online<span>Store</span> </header>
                
                 <div className={`links ${ clicked ? '' : 'hide'} `}>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/Cloths">Cloths</Link>
                        </li>
                        <li>
                        <Link to="/Electronic">Electronic</Link>
                        </li>
                        <li>
                        <Link to="/Jewellery">Jewellery</Link>
                        </li>
                    </ul>
                </div>
                <button className='cartBtn'>cart</button>
                <button onClick = { handleClicked } className='menuBtn'>{ clicked ? 'Close' : 'Menu' } </button>
            </div>
        </div>
        </>
    );
}
export default Header;