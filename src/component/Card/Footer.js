import React from 'react';
import './Footer.css';

const Footer = () =>{
    return(
        <>
            <div className='footer'>
                <div className='footerBody'>
                    <div className='footerContent'>
                       <div className='footerHeader'>
                       <header className='header'> Online<span>Store</span> </header>
                       <p className='img'></p>
                       <div className='address'>
                        <h1 className='addressTxtHeader'>Address</h1>
                        <p className='addressTxt'>123 serenity Lane<br/>
                        Tranquliville, Blissfull Country<br/>
                        Harmonyville, Peaceful Country<br/>
                        postcode:Zen 000
                        </p>
                       </div>
                       </div>
                        <div className='linksFooter'>
                    <ul>
                        <li>
                            <a href='home.js'>Home</a>
                        </li>
                        <li>
                            <a href='home.js'>cloths</a>
                        </li>
                        <li>
                            <a href='home.js'>electronics</a>
                        </li>
                        <li>
                            <a href='home.js'>gargets</a>
                        </li>
                    </ul>
                        </div> 
                        <form className='footerForm'>
                            <label>Email Address: </label>
                            <input
                            className='inputEmail'
                            placeholder='example@gmail.com'
                             />
                             <label>Request: </label>
                             <textarea
                             placeholder='please type in your request here...'
                             className='formTextArea'
                              />
                             <button className='footerSubmitBtn'>Submit Request</button>
                        </form>
                    </div>
                    {/* <button className='backToTop'>^</button> */}
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
                    <div className='footerTxt'>
                        <p className='footerTxtHelp'>Help Line Number: <span>  +234 800 1200 1200</span></p>
                        <p className='footerTxtRight'>© 2023 All Rights Reserved. Design by dev-jay-jay</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;