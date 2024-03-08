import React from 'react';
import LandingPageText from '../components/LandingPageText.jsx'; 
import DBForm from '../components/DBForm.jsx'; 
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-page">
      <div>
        <LandingPageText/> 
      </div>
        <Link className="button" to='/formpage'>CONNECT TO DB</Link>
    </div>
  )
}

export default Landing;