import React from 'react';
import Card from '../../Card';
import './style.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
/**
* @author
* @function CiPipeline
**/

const CiPipeline = (props) => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return(
    <div className="cipipeline">
      <Card style={{width:'700px',height:'400px',background:'#fff'}}>
      <img src="https://www.plutora.com/wp-content/uploads/2019/03/cicd-pipeline-1024x355.png"/>
      </Card>
      <div style={{marginTop:'420px',marginLeft:'20px'}}>
      <h2>CI Pipeline</h2>
      <span>Companies using these pipelines: Netflix, Amazon, Walmart.</span>
      </div>
      <Card style={{width:'280px',height:'495px',background:'#fff',marginLeft:'735px'}}>
        <div className="rightBarContainer">
          <h3>Description</h3>
          <p>CI Pipeline is the first step in CI/CD. Whenever you push your code, it compiles, tests it and if required even notifies you about your pushed code. The build server will do this heavy job making developers' lives easier. This can be done with some regularity and you aren't necessarily expected to keep the generated builds out of it.These can sometimes be called snapshot builds. You might deploy these builds to an environment, but only to test.
          </p>
          
          <FormControl component="fieldset">
      <FormLabel component="legend">Platforms:</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} style={{height:'130px'}}>
        <FormControlLabel value="github" control={<Radio />} label="GitHub" />
        <FormControlLabel value="gitlab" control={<Radio />} label="GitLab" />
        <FormControlLabel value="azure" control={<Radio />} label="Azure" />
      </RadioGroup>
    </FormControl>
    <Card style={{width:'200px',background:'#000',height:'30px',color:'#fff',textAlign:'center',marginLeft:'40px'}}><span>Download</span></Card>
          </div>
    
     
      </Card>
      </div>
   )

 }

export default CiPipeline