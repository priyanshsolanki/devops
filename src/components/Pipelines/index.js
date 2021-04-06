import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import PiplineItem from './PipelineItem';
import PlatformItem from './PipelineItem/PlatformItem';
import './style.css';
/**
* @author
* @function Pipelines
**/

const Pipelines = (props) => {
  const [pipeline,setPipline]=useState([]);
  useEffect(()=>{
    Axios.get('https://api.mocki.io/v1/56500361').then(res=>{console.log(res.data)
    setPipline(res.data);  
  });
  },[]);
  

  return(
    <div style={{margin:'20px'}}>
        <span className="heading">All Results</span>

        <div className="pipelineItemsContainer">
        {pipeline.map(pipe=>{
          return <PiplineItem data={pipe}/>
        })}
        </div>
    </div>
   )

 }

export default Pipelines;