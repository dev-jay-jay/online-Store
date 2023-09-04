import React from 'react';
import './card.css';



function Card({showDirection}){
    return(
        <div className='card'>
           {showDirection && <div className='direction'>
                <span className='spanLeft'>&#10094;</span>
                <span className='spanRight'>&#10095;</span>
            </div>}
          <div className='cardContent'>
             <div className='imgCard'>
                </div> 
                <div className='cardTxt'>
                <p className='cardTxtPrice'><span>price:</span>$00</p>
                    <p className='cardTxtTitle'>Title OF Product</p>
                    <p className='cardTxtLike'>like</p>
                    <p className='cardTxtCart'>cart</p>
                    </div>  
            </div>

            <div className='cardContent'>
             <div className='imgCard'>
                </div> 
                <div className='cardTxt'>
                <p className='cardTxtPrice'><span>price:</span>$00</p>
                    <p className='cardTxtTitle'>Title OF Product</p>
                    <p className='cardTxtLike'>like</p>
                    <p className='cardTxtCart'>cart</p>
                    </div>  
            </div>

            <div className='cardContent'>
             <div className='imgCard'>
                </div> 
                <div className='cardTxt'>
                    <p className='cardTxtPrice'><span>price:</span>$00</p>
                    <p className='cardTxtTitle'>Title OF Product</p>
                    <p className='cardTxtLike'>like</p>
                    <p className='cardTxtCart'>cart</p>
                    </div>  
            </div>  
        </div>
    );
}
export default Card;