// import logo from './logo.svg';
import './App.css';
// import './theme.scss'
// import { Link } from 'react-router-dom';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Sidebar from './Sidebar';
import Bar from './Bar';
import Card from './Card';
import Home from './Home';
function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Sidebar/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/bar' element={<Bar/>}/>
      
    </Routes>
  </Router>
   </>
  );
}

export default App;
