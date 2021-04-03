import './App.css';
import Card from './components/Card';
import Sidebar from './components/SideBar/index';

function App() {
  return (
    <div className="App" >
      <Sidebar/>
      
        <Card style={{width:'70%',height:'13%',marginLeft:'23%'}}/>
        <Card style={{width:'70%',height:'77%',marginTop:'9%',marginLeft:'23%'}}/>
      
    </div>
  );
}

export default App;
