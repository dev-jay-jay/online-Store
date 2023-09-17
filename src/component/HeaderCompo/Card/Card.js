import React, { useState } from 'react';
import './Card.css';
import Data from '../../Data/db';
import SubHeader from '../SubHeader/SubHeader';

const Card = () => {

    const [searchText, setSearchText] = useState('');


    const handleChange = (e) =>{
        setSearchText(e.target.value);
    }
    
    return(
        <>
        <div className='search'>
                    <div className='searchBody'>
                        <input className='searchInput'
                        placeholder='Search Items'
                         onChange={ handleChange }
                         />
                         <p>{searchText}</p>
                        
                    </div>
                </div>
        <SubHeader SubHeader='Mens and women fashion' />
        <div className='Card'>
            <div className='CardBody'>
                { Data.menWomen.map(items => {
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
                <div className='NextPreviewBtn'>
                        <div className='NextPreviewBtnBody'>
                            <button className='previousBtn'>Previous</button>
                            <button className='nextBtn'>Next</button>
                    </div>
                </div>
        </div>
        <SubHeader SubHeader='Electronic' />
        <div className='Card'>
            <div className='CardBody'>
                {Data.electronic.map(items =>{
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
                <div className='NextPreviewBtn'>
                        <div className='NextPreviewBtnBody'>
                            <button className='previousBtn'>Previous</button>
                            <button className='nextBtn'>Next</button>
                    </div>
                </div>
        </div>
        <SubHeader SubHeader='Jewellery Accessories' />
        <div className='Card'>
            <div className='CardBody'>
                {Data.Jewellery.map(items =>{
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

export default Card;