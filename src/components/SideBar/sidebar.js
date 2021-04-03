import React from 'react'
import Card from '../Card';
import SidebarItems from './SidebarItems';
import SidebarLogo from './SidebarLogo';
import './style.css';
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
      <div class="sidebarContainer">
    <Card style={{width:'20%',height:'93%'}}>  
        <SidebarLogo/>
        <SidebarItems/>
        
    </Card>
    </div>
   )

 }

export default Sidebar;