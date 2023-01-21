import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
import { useSelector } from 'react-redux';

const LogoutCard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleLogout = (event) => {
    event.preventDefault();
    alert('Goodbye ' + user.email);
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default LogoutCard;
