import React,{useState} from 'react';
import PiplineItem from './PipelineItem';
import PlatformItem from './PipelineItem/PlatformItem';
import './style.css';
/**
* @author
* @function Pipelines
**/

const Pipelines = (props) => {
  const [pipeline,setPipeLine]=useState([
    {
      titleLogo:"CI",
      title:"CI Pipeline",
      platforms:[
        "GitLab",
        "GitHub",
        "Azure"
      ]
    },
    {
      titleLogo:"CD",
      title:"CD Pipeline",
        platforms:[
          "GitLab",
          "Azure"]
     },
     {
      titleLogo:"PR",
      title:"PR Pipeline",
        platforms:[
          "GitLab",
          "Azure"]
     },
     {
      titleLogo:"AP",
      title:"Artifact Pipeline",
        platforms:[
          "GitLab",
          "Azure"]
     }        
  ]);


  return(
    <div style={{margin:'20px'}}>
        <h2>All Results</h2>

        <div className="pipelineItemsContainer">
        {pipeline.map(pipe=>{
          return <PiplineItem data={pipe}/>
        })}
        </div>
    </div>
   )

 }

export default Pipelines;