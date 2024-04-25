import React from 'react';
import Landing from './react/containers/Landing.jsx';
import Navbar from './react/components/Navbar.jsx'; 
import DBFlowContainer from './react/containers/DBFlowContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './react/containers/FormPage.jsx';
import HostedFormPage from './react/containers/HostedFormPage.jsx';
const App = () => {
  
  return ( 
    //wrap in browserRouter
    <BrowserRouter>   
    <Navbar/>
      <div>
        <Routes> 
          <Route
            //endPoint and element for ReactRouter:
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
          <Route 
            path='/hostedFormPage' 
            element={<HostedFormPage/>}
          />
        </Routes>
      </div>
     </BrowserRouter>
  )
};


export default App;