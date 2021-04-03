import React from 'react'
import Card from '../../Card'
import './style.css';

import {BiDotsVerticalRounded} from 'react-icons/bi';
import PlatformItem from './PlatformItem';
/**
* @author
* @function PiplineItem
**/

const PiplineItem = (props) => {
 
  return (

    <Card style={{ width: '300px', height: '170px', background: '#ffff', position: 'relative', borderRadius: '20px' }}>
      <div className="pipelineItemHeader">
        <div className="piplineLogo">{props.data.titleLogo} </div>
        <span>{props.data.title}</span>
    
        <BiDotsVerticalRounded  style={{marginLeft:'70px',marginTop:'10px',width:'30px',height:'30px'}}/>
      </div>
      <div className="pipelineContent">
        {
          props.data.platforms.map(platform=>{
            return <PlatformItem platformName={platform}/>;
          })
            }
          
      </div>
     <Card />
    </Card>

  )

}

export default PiplineItem;