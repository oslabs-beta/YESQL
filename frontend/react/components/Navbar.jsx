import React from "react";
import logo from '../../assets/yesql_logo.png';

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} alt="yesql_logo" />
      <ul className="navbar-links">
        <li>Github</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;