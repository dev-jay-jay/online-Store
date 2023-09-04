import React from 'react';
import './subTitle.css';

function SubTitle(props){
    return (
        <div>
            <h2 className='subHeaderTitle'>{props.header}</h2>
        </div>
    );
}
export default SubTitle;