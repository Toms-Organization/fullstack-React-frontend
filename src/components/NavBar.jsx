import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center text-2xl w-full h-40 px-5 py-5 font-plainheader text-white bg-black">
      <Link to="/Home" className="homePage">
        <h1 className="flex text-8xl font-signature ml-2 justify-start">
          Tom Ganemo
        </h1>
      </Link>

      <Link to="/Home" className="HomePage">
        Home
      </Link>

      <Link to="/About" className="AboutPage">
        About
      </Link>

      <Link to="/News" className="NewsPage">
        News
      </Link>

      <Link to="/Blog" className="BlogPage">
        Blog
      </Link>

      <Link to="/Login" className="LoginPage">
        Login/Logout
      </Link>
    </nav>
  );
};

export default NavBar;
