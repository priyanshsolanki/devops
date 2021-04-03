import React from 'react';
import './style.css';

/**
* @author
* @function SidebarItem
**/

const SidebarItem = (props) => {
  return(
    <div className="SidebarItemContainer" {...props}>{props.logo}   {props.title}</div>
   )

 }

export default SidebarItem;