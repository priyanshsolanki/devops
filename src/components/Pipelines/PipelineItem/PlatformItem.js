import React from 'react';
import './style.css';
/**
* @author
* @function PlatformItem
**/

const PlatformItem = (props) => {
  return(
    <div className="pipelineContentItem">
      {props.platformName}
  </div>
   )

 }

export default PlatformItem;