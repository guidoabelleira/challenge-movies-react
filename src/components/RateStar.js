import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const RateStar = (props) => {
    
    let stars = [];
    let index = Math.floor(props.props / 2);
    // console.log("rateStar: ",index);
    for(let i=0 ; i <= index; i++){
        stars.push('*');
    }
    
    return (
        <div>
            {
            stars.map((e, key ) => (
                <i key={key}>
                    <FontAwesomeIcon icon={ faStar }/>
                </i>
            ) )
        }
        </div>
        
    )
}

export default RateStar;