import React from 'react';
import SidebarItem from './SidebarItem';
import * as SiIcons from 'react-icons/si';
import './style.css';
/**
* @author
* @function SidebarItems
**/

const SidebarItems = (props) => {
  return(
    <div className="sidebarItemsContainer">
        <SidebarItem title="Pipeline" logo={<SiIcons.SiAzuredevops/>}/>
        <SidebarItem title="Infrastructure" logo={<SiIcons.SiAzuredevops/>}/>
    </div>
   )

 }

export default SidebarItems;