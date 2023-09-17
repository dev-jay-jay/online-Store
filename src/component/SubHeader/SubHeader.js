import React from 'react';
import './SubHeader.css';

const SubHeader = (props) => {
    return(
        <>
            <div className='subHeader'>
                <h1>{ props.SubHeader }</h1>
            </div>
        </>
    );
}
export default SubHeader;