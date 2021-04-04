import React from 'react';
import './style.css';

/**
* @author
* @function SidebarItem
**/

const SidebarItem = (props) => {
  return(
    <div className="btn" {...props}>
      <span style={{marginRight:'15px',marginLeft:'10px'}}>{props.logo}</span>    {props.title}
    </div>
   )

 }

export default SidebarItem;