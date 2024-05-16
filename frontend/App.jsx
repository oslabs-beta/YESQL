import React from 'react';
import Landing from './react/containers/Landing.jsx';
import Navbar from './react/components/Navbar.jsx'; 
import DBFlowContainer from './react/containers/DBFlowContainer.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import FormPage from './react/containers/FormPage.jsx';
import HostedFormPage from './react/containers/HostedFormPage.jsx';
const App = () => {
  return ( 
    //wrap in browserRouter
    <>
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
    </>
  )
};


export default App;