import React from 'react';
import './style.css';

/**
* @author
* @function SidebarLogo
**/

const SidebarLogo = (props) => {
  return(
    <div class="sidebarLogoContainer">
        <div style={{margin:"10px",background:"#FFF",padding:"10px"}}>
          Img
        </div>
        <div>
        <div style={{fontSize:'30px',fontWeight:'bold'}}>DevOps</div>
        <span style={{color:'red'}}>In-a-box</span>
        </div>
    </div>
   )

 }

export default SidebarLogo;