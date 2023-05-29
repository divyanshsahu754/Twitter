import React, { useState } from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import HomePage from './components/HomePage/HomePage';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
        
           <Route path='/homepage' element= {<HomePage/>}></Route>
           <Route path='/' element= {<SignIn/>}></Route>
           <Route path='/signup' element= {<SignUp/>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
