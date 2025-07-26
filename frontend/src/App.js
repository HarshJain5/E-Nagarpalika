import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contextapi } from './contextapi/Contextapi';
import Home from './components/Home';
import Header from './Header';
import Step1form from './components/pages/Step1form';
import Step2form from './components/pages/Step2form';
import Print from './components/pages/Print';
import TrackStatus from './components/pages/TrackStatus';
import Login from './components/pages/Login';
import { useState } from 'react';
import Dashboard from './components/pages/Dashboard';

function App() {
  const [loginName,setLoginName]=useState(localStorage.getItem('loginName'))
  const [role,setRole]=useState(localStorage.getItem('role'))
  return ( 
    <div className="app-background">
    <Router>
      <Contextapi.Provider value={{role,loginName,setLoginName,setRole}}>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/form' element={<Step1form/>}></Route>
        <Route path='/step2' element={<Step2form/>}></Route>
        <Route path='/print' element={<Print/>}></Route>
        <Route path='/track' element={<TrackStatus/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      </Contextapi.Provider>
    </Router>
    </div>
   );
}

export default App;