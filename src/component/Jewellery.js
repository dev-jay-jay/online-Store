import React from 'react';
import Data from '../Data/db';
import SubHeader from './SubHeader/SubHeader';

const Jewellery = () => {
    return (
        <>
            <SubHeader SubHeader='Jewellery Accessories' />
            <div className='Card'>
                <div className='CardBody'>
                    {
                        Data.Jewellery.map((items) => {
                            return(
                                <div key={ items.id } className='cardContent'>
                                    <h1 className='cardInforHeader'> { items.cardInforHeader }</h1>
                                    <img className='cardImg' src={ items.image }
                                    alt={ items.alt }
                                    />
                                    <div className='cardInfo'>
                                        <div className='cardInfoBody'>
                                            <div className='cardInforText'>
                                                <p className='CardPrice'> { items.cardPrice }</p>
                                                <p> { items.disc }</p>
                                            </div>
                                            <div className='cardInfoBtn'>
                                                <button className='likeBtn'>{ items.likeBtn }</button>
                                                <button className='addCartBtn'> { items.addCartBtn }</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}
export default Jewellery;