import React from 'react';
import SidebarItem from './SidebarItem';
import './style.css';
/**
* @author
* @function SidebarItems
**/

const SidebarItems = (props) => {
  return(
    <div class="sidebarItemsContainer">
        <SidebarItem/>
        <SidebarItem/>
    </div>
   )

 }

export default SidebarItems;