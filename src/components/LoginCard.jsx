import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';
import { useSelector } from 'react-redux';

const LoginCard = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const handleLogout = (event) => {
    event.preventDefault();
    alert('Goodbye ' + user.email);
    dispatch(logout());
  };

  const handleLogin = (event) => {
    // TODO: Implement a function to login if not 200 succcess print it...

    event.preventDefault();
    dispatch(
      login({
        email: inputs.email,
      })
    );
    alert(
      'Welcome to my page ' +
        inputs.email +
        '! Let me know what you think about it!'
    );
  };
  return (
    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
      <div className="  w-1/5">
        <form>
          <div className="mb-6">
            <label className="flex xl:justify-center">Enter your email: </label>
            <input
              id="emailFormInput"
              type="text"
              name="email"
              value={inputs.email || ''}
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
              name="password"
              type="password"
              value={inputs.password || ''}
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
              <a
                href="#!"
                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
              >
                Register
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
