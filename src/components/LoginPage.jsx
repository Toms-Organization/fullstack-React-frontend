import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <div>
        <h1>Login Page</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
      </div>

      <br />
      <button
        onClick={() =>
          dispatch(
            login({
              name: 'Tom',
              age: 30,
              email: 'tomsmail@gmail.com',
            })
          )
        }
      >
        LOGIN
      </button>
      <br />
      <button onClick={() => dispatch(logout())}>LOGOUT</button>
    </div>
  );
};

export default LoginPage;
