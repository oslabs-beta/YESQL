import React from 'react';
import Landing from './react/containers/Landing.jsx';
import DBFlowContainer from './react/containers/DBFlowContainer.jsx';


const App = () => {
  return (
    <div>
      <h1>This is our React Appi</h1>
      <div className="container">
        <Landing/>
        <DBFlowContainer/>
      </div>
    </div>
  )
}


export default App;