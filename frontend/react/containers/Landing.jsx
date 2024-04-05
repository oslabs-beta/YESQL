import React from 'react';
import LandingPageText from '../components/LandingPageText.jsx'; 
import DBForm from '../components/DBForm.jsx'; 
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-page">
      <h1>Say goodbye to <br />inefficiencies <br />and hello to <br/><span>precision with Yesql</span></h1>
      {/* <h3>
        make your queries optimal with <span className="yesql-intro">Yes<span>ql</span></span></h3> */}
      <div className="landing-page-grid">
      <div> 
      {/* render instructions: */}
        <LandingPageText/> 
      </div>
      <div>
          <h3><span>
            In a world where time is currency,
            <br />optimize SQL queries effortlessly with Yesql.
          </span>
            <br/>Visualize records, columns, and table segments to 
            <br/>craft finely tuned queries for optimal performance. 
          </h3>
            {/*link tag points to /formpage */}
          <div className="landing-button-container">
            <Link className="button" to='/formpage'>Connect to local Database</Link>
            <Link className='button button-2' to='/hostedFormPage'>Connect to hosted Database</Link>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Landing;