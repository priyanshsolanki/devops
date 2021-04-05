import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

/**
* @author
* @function SidebarItem
**/

const SidebarItem = (props) => {
  return(
   
    <NavLink className="btn" activeClassName="active"  to={props.link}>
      <div className="itemDiv" {...props}>
      <img style={{marginRight:'15px'}} src={props.logo}/>{props.title}
      </div>
     </NavLink>

   )

 }

export default SidebarItem;