import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Admindash from './components/Admindash';
import Coursemanage from './components/Coursemanage';
import Adminlogin from './components/Adminlogin';
import './App.css';
import Courseview from './components/Courseview';
import Sidebar from './components/Sidebar';
import Coursetype from './components/Coursetype';
function App() {
  return (
    <div className="App">
      
  <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home method='post'/>} />
         
         <Route path="/Adminlogin" element={<Adminlogin method='get'/>}/>
         <Route path="/Admindash" element={<Admindash method='get'/>}/>
         <Route path="/Coursemanage" element={<Coursemanage method='post'/>}/>
         <Route path="/Courseview" element={<Courseview method='get'/>}/>
         <Route path="/Coursetype" element={<Coursetype method='post' />}/>

      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
