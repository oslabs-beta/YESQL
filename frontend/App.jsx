import React from 'react';
import Landing from './react/containers/Landing.jsx';
import Navbar from './react/components/Navbar.jsx'; 
import DBFlowContainer from './react/containers/DBFlowContainer.jsx';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import FormPage from './react/containers/FormPage.jsx';
const App = () => {
  return ( 
    <BrowserRouter>   
    <Navbar/>
      <div className="container">
        <Routes> 
          <Route
            path='/'
            element={<Landing/>} 
          />
          <Route 
            path='/chart'
            element={<DBFlowContainer/>} 
          />
          <Route 
            path='/formpage' 
            element={<FormPage/>}
          />
        </Routes>
      </div>
     </BrowserRouter>
  )
};


export default App;