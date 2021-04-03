import React from 'react';
import './style.css';

/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card" {...props} style={{borderRadius:'10px',...props.style}}>
       {props.children}
    </div>
   )

 }
export default Card;