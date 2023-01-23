import React from 'react';
import { useState, useEffect } from 'react';
import { loginUserAGAIN } from '../services/userService';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../features/login';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SimpleLoginForm = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const returnFromLogin = async () => {
      const reply = await loginUserAGAIN(inputs.userName, inputs.passWord);
      console.log('reply.data');
      console.log(reply.data);
      // set user details

      dispatch(
        loginUser({
          id: reply.data.id,
          userName: reply.data.userName,
          email: reply.data.email,
          token: reply.data.token,
        })
      );
    };
    returnFromLogin();
    alert(
      'Welcome to my page ' +
        inputs.userName +
        '! Let me know what you think about it!'
    );
    navigate('/');
  };

  return (
    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
      <div className="  w-1/5 ">
        <form>
          <div className="mb-6">
            <label className="flex xl:justify-center">Enter your email: </label>
            <input
              id="emailFormInput"
              type="text"
              name="userName"
              value={inputs.userName || ''}
              onChange={handleChange}
              className=" text-center form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>

          <div className="mb-6">
            <label className="flex xl:justify-center">
              Enter your password:
            </label>
            <input
              name="passWord"
              type="password"
              value={inputs.passWord || ''}
              className="text-center form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="passwordFormInput"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div className=" text-center  items-center mb-6">
            <a href="#!" className="text-gray-300">
              Forgot password?
            </a>
          </div>

          <div className="text-center">
            <button
              onClick={handleLogin}
              type="button"
              className=" w-2/5  mx-3 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
            <div className="">
              <p className=" text-gray-300 text-sm font-semibold mt-2 pt-1 mb-0">
                Don't have an account?
              </p>

              <Link
                to="/CreateUser"
                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleLoginForm;
