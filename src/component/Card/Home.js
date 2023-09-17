import React, { useState } from 'react';
import './Home.css';
import Data from '../../Data/db';
import SubHeader from '../SubHeader/SubHeader';

const Home = () => {

    const [searchText, setSearchText] = useState('');

    const handleChange = (e) =>{
        setSearchText(e.target.value);
    }

    
    
    return(
        <>
        <div className='text-center' >
                    <div className='searchBody'>
                        <input className='searchInput'
                        placeholder='Search Items'
                         onChange={ handleChange }
                         />
                    </div>
                </div>
        { searchText ? "" : <SubHeader SubHeader='Mens and women fashion' /> }
        <div className='Card'>
            <div className='CardBody'>
                { Data.menWomen.filter((items) => items.cardInforHeader.toLowerCase().includes(searchText.toLowerCase())
                ).map(items => {
                return(
                    <div key={items.id} className='cardContent'>
                            <h1 className='cardInforHeader'> { items.cardInforHeader } </h1>
                                <img className='cardImg' src={process.env.PUBLIC_URL + items.image} 
                                alt={ items.alt }
                                />
                            <div className='cardInfo'>
                                <div className='cardInfoBody'>
                                    <div className='cardInforText'>                               
                                        <p className='cardPrice'> { items.cardPrice } <span> { items.value } </span></p>
                                        <p> { items.disc } </p>
                            </div>
                            <div className='cardInfoBtn'>
                                <button className='likeBtn'>{ items.likeBtn }</button>
                                <button className='addCartBtn'>{ items.addCartBtn }</button>
                            </div>
                        </div>
                    </div>
                </div>
                );
                }) }
            </div>
                { searchText ? "": <div className='NextPreviewBtn'>
                        <div className='NextPreviewBtnBody'>
                            <button className='previousBtn'>Previous</button>
                            <button className='nextBtn'>Next</button>
                    </div>
                </div> }
        </div>
        { searchText ? "" : <SubHeader SubHeader='Electronic' /> }
        <div className='Card'>
            <div className='CardBody'>
                {Data.electronic.filter((items) => items.cardInforHeader.toLowerCase().includes(searchText.toLowerCase())
                ).map(items =>{
                    return(
                        <div key={items.id} className='cardContent'>
                            <h1 className='cardInforHeader'> { items.cardInforHeader } </h1>
                            <img className='cardImg' src={process.env.PUBLIC_URL + items.image} 
                                alt={ items.alt }
                                />
                                <div className='cardInfo'>
                                    <div className='cardInfoBody'>
                                        <div className='cardInforText'>
                                        <p className='cardPrice'> { items.cardPrice } <span> { items.value } </span></p>
                                        <p> { items.disc } </p>
                                        </div>
                                        <div className='cardInfoBtn'>
                                            <button className='likeBtn'>{ items.likeBtn }</button>
                                            <button className='addCartBtn'>{ items.addCartBtn }</button>
                                        </div>
                                    </div>
                                </div>
                        </div>

                    );
                })} 
            </div>
            { searchText ? "": <div className='NextPreviewBtn'>
                        <div className='NextPreviewBtnBody'>
                            <button className='previousBtn'>Previous</button>
                            <button className='nextBtn'>Next</button>
                    </div>
                </div> }
        </div>
        { searchText ? "" : <SubHeader SubHeader='Jewellery Accessories' /> }
        <div className='Card'>
            <div className='CardBody'>
                { Data.Jewellery.filter((items) => items.cardInforHeader.toLowerCase().includes(searchText.toLowerCase())
                ).map(items =>{
                    return(
                        <div key={items.id} className='cardContent'>
                            <h1 className='cardInforHeader'> { items.cardInforHeader } </h1>
                            <img className='cardImg' src={process.env.PUBLIC_URL + items.image} 
                                alt={ items.alt }
                                />
                                <div className='cardInfo'>
                                    <div className='cardInfoBody'>
                                        <div className='cardInforText'>
                                        <p className='cardPrice'> { items.cardPrice } <span> { items.value } </span></p>
                                        <p> { items.disc } </p>
                                        </div>
                                        <div className='cardInfoBtn'>
                                            <button className='likeBtn'>{ items.likeBtn }</button>
                                            <button className='addCartBtn'>{ items.addCartBtn }</button>
                                        </div>
                                    </div>
                                </div>
                        </div>

                    );
                })} 
            </div>
        </div>
        </>
    );
}

export default Home;