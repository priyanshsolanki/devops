import React from 'react'
import Card from '../Card';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
      <div>
    <Card style={{width:'20%',height:'93%'}}>  
        <div style={{fontSize:'30px',fontWeight:'bold'}}>DevOps</div>
        <span>in-the-box</span>
    </Card>
    </div>
   )

 }

export default Sidebar;