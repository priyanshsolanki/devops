import './App.css';
import Card from './components/Card';
import Sidebar from './components/SideBar/index';
import Pipeline from '../src/components/Pipelines/index';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CiPipeline from './components/Pipelines/CiPipeline/index';
function App() {
  return (
    <div className="App" >
      <Sidebar/>
      
        <Card style={{width:'70%',height:'10%',marginLeft:'23%'}}/>
        <Card style={{width:'70%',height:'77%',marginTop:'7%',marginLeft:'23%'}}>
          <Router>
          <Route path="/" exact component={Pipeline}/>
          <Route path="/cipipeline" exact component={CiPipeline}/>
          </Router>
        </Card>
      
    </div>
  );
}

export default App;
