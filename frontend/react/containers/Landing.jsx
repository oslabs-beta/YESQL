import React from 'react';
import LandingPageText from '../components/LandingPageText.jsx'; 
import DBForm from '../components/DBForm.jsx'; 
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <div>
        <LandingPageText/> 
      </div>
      <div>
        <Link to='/formpage'>Form Page!</Link>
      </div>
    </div>
  )
}

export default Landing;