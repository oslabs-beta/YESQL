import React from 'react';
import Landing from './react/containers/Landing.jsx';
import Navbar from './react/components/Navbar.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Landing/>
      </div>
    </div>
  )
}


export default App;