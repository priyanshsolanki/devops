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
      path:"/pipelines/cipipeline",
      platforms:[
        "GitLab",
        "GitHub",
        "Azure"
      ]
    },
    {
      titleLogo:"CD",
      title:"CD Pipeline",
      path:"/pipelines/cdpipeline",
      platforms:[
          "GitLab",
          "Azure"]
     },
     {
      titleLogo:"PR",
      title:"PR Pipeline",
      path:"/pipelines/prpipeline",
      platforms:[
          "GitLab",
          "Azure"]
     },
     {
      titleLogo:"AP",
      title:"Artifact Promoting Pipeline",
      path:"/pipelines/appipeline",
        platforms:[
          "GitLab",
          "Azure"]
     },
     {
      titleLogo:"AT",
      title:"API Test Pipeline",
      path:"/pipelines/atpipeline",
        platforms:[
          "GitLab",
          "Azure"]
     },
     {
      titleLogo:"LP",
      title:"Load & Performance Test Pipeline",
      path:"/pipelines/lppipeline",
        platforms:[
          "GitLab",
          "Azure"]
     }        
  ]);


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