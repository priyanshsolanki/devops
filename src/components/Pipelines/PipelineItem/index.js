import React from 'react'
import Card from '../../Card'
import './style.css';
import { Link } from 'react-router-dom';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import PlatformItem from './PlatformItem';
/**
* @author
* @function PiplineItem
**/

const PiplineItem = (props) => {
 
  return (

    <Card style={{ width: '290px', height: '170px', background: '#ffff', position: 'relative', borderRadius: '20px' }}>
      <div className="pipelineItemHeader">
        <div className="piplineLogo"><span style={{fontWeight:'bold'}}>{props.data.titleLogo}</span> </div>
        <Link style={{textDecoration:'none',color:'#000',marginTop: '20px',width: '200px'}} to={props.data.path}><span>{props.data.title}</span></Link>
    
        <BiDotsVerticalRounded  style={{marginTop:'10px',width:'30px',height:'30px'}}/>
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