import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-40 px-5 py-5  text-white bg-black">
      <Link to="/Home" className="homePage">
        <h1 className="flex text-5xl font-signature ml-2 justify-start">
          Tom Ganemo
        </h1>
      </Link>
      <h3 className="navbar-links">
        <h3>
          <Link to="/Login" className="LoginPage">
            Login/Logout
          </Link>
        </h3>
        <h3>
          <Link to="/About" className="AboutPage">
            About
          </Link>
        </h3>
      </h3>
    </nav>
  );
};

export default NavBar;
