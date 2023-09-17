import React from 'react';

const Searchresult = ({ results }) =>{
    return (  
        <div className='searchResult'>
            {results.map((item) =>(
                <div key={ item.id} className='searchCard'>
                    <h1 className='cardInforHeader'> { item.cardInforHeader } </h1>
                </div>
            ))}

        </div>
    );
}
export default Searchresult;