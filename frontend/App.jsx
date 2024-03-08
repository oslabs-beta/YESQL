import React from 'react';
import Landing from './react/containers/Landing.jsx';
import Navbar from './react/components/Navbar.jsx';
import DBFlowContainer from './react/containers/DBFlowContainer.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Landing/>
        <DBFlowContainer/>
      </div>
    </div>
  )
};


export default App;