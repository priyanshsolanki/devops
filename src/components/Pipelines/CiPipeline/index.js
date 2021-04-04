import React from 'react';
import Card from '../../Card';
import './style.css';

/**
* @author
* @function CiPipeline
**/

const CiPipeline = (props) => {
  return(
    <div className="cipipeline">
      <Card style={{width:'700px',height:'400px',background:'#fff'}}>
      <img src="https://www.plutora.com/wp-content/uploads/2019/03/cicd-pipeline-1024x355.png"/>
      </Card>
      <Card style={{width:'280px',height:'495px',background:'#fff',marginLeft:'735px'}}>
        <span>Description</span>
      </Card>
      </div>
   )

 }

export default CiPipeline