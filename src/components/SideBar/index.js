import React from 'react';
import './style.css';

/**
* @author
* @function SideBar
**/

const SideBar = (props) => {
  return(
    <div className="sideBarContainer"style={{borderRadius:"15px"}}>
        <div style={{fontSize:'30px',fontWeight:'bold'}}>DevOps</div>
        <span>in-the-box</span>
    </div>
   )

 }

export default SideBar