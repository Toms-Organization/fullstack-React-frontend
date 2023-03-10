import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
import { loginUser, logoutUser } from '../features/login';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogoutCard = () => {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state) => state.login.value);
  let navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    alert('Goodbye ' + userLoggedIn.userName);
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className="min-h-screen font-plainheader flex justify-center text-white bg-black text-base ">
      <div className=" pt-20 w-1/5 ">
        <button
          className="flex justify-center w-2/5 mx-20  px-40 py-10 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={handleLogout}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default LogoutCard;
