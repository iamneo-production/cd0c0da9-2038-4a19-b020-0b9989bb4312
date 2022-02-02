import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
  <div className="app">
    <BrowserRouter>
    <Routes>
    <Route path='/login' exact element={<Login/>}/>
    <Route path='/signup' exact element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    
  </div>);
  
};

export default App;