import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
import { useSelector } from 'react-redux';
import TestForm from '../components/TestForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h1 className="flex justify-between items-center text-2xl">
        This is LoginPage
      </h1>

      <div>
        <TestForm></TestForm>
      </div>

      <div>
        <br />
        <br />
        <br />
        <h1>Current Logged in is:</h1>
        <p>Name: {user.name}</p>
        <p>reason: {user.reason}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default LoginPage;
