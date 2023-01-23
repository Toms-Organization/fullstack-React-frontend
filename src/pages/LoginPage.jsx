import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
import { useSelector } from 'react-redux';
import TestForm from '../components/TestForm';
import LoginCard from '../components/LoginCard';
import SimpleLoginForm from '../components/SimpleLoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  return (
    <div className="min-h-screen font-plainheader text-white bg-black text-base">
      <h1 className=" flex justify-center text-8xl font-signature p-8 ">
        This is LoginPage
      </h1>
      <br />
      <div>
        <SimpleLoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
