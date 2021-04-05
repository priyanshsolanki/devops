import React from 'react';
import SidebarItem from './SidebarItem';
import HomeLogo from './Logos/Home.png';
import Btn from './Logos/btn.png';
import InfraLogo from './Logos/profil.png';
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
        {/* <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
         
          <img src={Btn} style={{width:'75%',height:'35px',position:'absolute'}}/>
          <span style={{position:'fixed'}}>Hello</span>

        </div> */}
    </div>
   )

 }

export default SidebarItems;