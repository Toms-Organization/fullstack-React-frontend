import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const loggedInUser = useSelector((state) => state.user.value);
  return (
    <nav className="flex justify-between items-center text-2xl w-full h-40 px-5 py-5 font-plainheader text-white bg-black">
      <Link to="" className="homePage">
        <h1 className="flex text-8xl font-signature ml-2 justify-start">
          Tom Ganemo
        </h1>
      </Link>

      <Link to="" className="HomePage">
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

      <div className="display: flex; flex-direction: column; text-base">
        <p>UserName: {loggedInUser.name}</p>
        <p>Reason: {loggedInUser.reason}</p>
        <p>email: {loggedInUser.email}</p>
      </div>
    </nav>
  );
};

export default NavBar;

/* 
 <Link to="/Login" className="LoginPage">
   Login/Logout
 </Link>; */
