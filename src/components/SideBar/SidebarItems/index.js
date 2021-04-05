import React from 'react';
import SidebarItem from './SidebarItem';
import HomeLogo from './Logos/Home.png';
import InfraLogo from './Logos/Profile.png';
import './style.css';
/**
* @author
* @function SidebarItems
**/

const SidebarItems = (props) => {
  return(
    <div className="sidebarItemsContainer">
        <SidebarItem title="Pipeline" logo={HomeLogo} link="/pipelines"/>
        <SidebarItem title="Infrastructure" logo={InfraLogo} link="/infrastructure"/>
    </div>
   )

 }

export default SidebarItems;