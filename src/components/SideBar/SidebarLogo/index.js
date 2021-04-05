import React from 'react';
import './style.css';
import HeaderImage from './header.png';
/**
* @author
* @function SidebarLogo
**/

const SidebarLogo = (props) => {
  return(
    <div class="sidebarLogoContainer">
        <img style={{background:'transparent'}} src={HeaderImage}/>
        <div>
        <div style={{fontSize:'30px',fontWeight:'bold'}}>DevOps</div>
        <span style={{color:'red'}}>In-a-box</span>
        </div>
    </div>
   )

 }

export default SidebarLogo;