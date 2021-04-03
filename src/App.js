import './App.css';
import Card from './components/Card';
import Sidebar from './components/SideBar/index';
import Pipeline from '../src/components/Pipelines/index';
function App() {
  return (
    <div className="App" >
      <Sidebar/>
      
        <Card style={{width:'70%',height:'10%',marginLeft:'23%'}}/>
        <Card style={{width:'70%',height:'77%',marginTop:'7%',marginLeft:'23%'}}>
        <Pipeline/>
        </Card>
      
    </div>
  );
}

export default App;
