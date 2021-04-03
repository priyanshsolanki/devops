import './App.css';
import Card from './components/Card';
import Sidebar from './components/SideBar/index';

function App() {
  return (
    <div className="App" >
      <Sidebar/>
      <div style={{marginLeft:'22%'}}>
        <Card style={{width:'70%',height:'13%'}}/>
        <Card style={{width:'70%',height:'77%',marginTop:'9%'}}/>
      </div>
    </div>
  );
}

export default App;
