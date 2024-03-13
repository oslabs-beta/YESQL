import React from 'react';
import LandingPageText from '../components/LandingPageText.jsx'; 
import DBForm from '../components/DBForm.jsx'; 
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-page">
      <h1>Let’s not waste your <br/>precious time</h1>
      <h3>
        make your SQL queries optimal with <span className="yesql-intro">Yes<span>ql</span></span></h3>
      <div className="landing-page-grid">
      <div>
        <LandingPageText/> 
      </div>
      <div>
        <Link className="button" to='/formpage'>Connect to Database</Link>
      </div>
      </div>
    </div>
  )
}

export default Landing;