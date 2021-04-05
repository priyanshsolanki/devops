import './App.css';
import Card from './components/Card';
import Sidebar from './components/SideBar/index';
import Pipeline from '../src/components/Pipelines/index';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CiPipeline from './components/Pipelines/CiPipeline/index';
import BlackDashboardScreenComponent from './BlackDashboardScreenComponent';
function App() {
  return (
    <Router>
    <div className="App" >
      {/* <BlackDashboardScreenComponent/> */}
      <Sidebar/>
      
        <Card style={{width:'76%',height:'10%',marginLeft:'23%'}}/>
        <Card style={{width:'76%',height:'81%',marginTop:'7%',marginLeft:'23%'}}>
        <Route path="/pipelines" exact component={Pipeline}/>
        <Route path="/pipelines/cipipeline" exact component={CiPipeline}/>
        </Card>
      
    </div>
    </Router>

  );
}

export default App;
