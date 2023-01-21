import React from 'react';
import { Form } from 'react-router-dom';

const LoginCard = () => {
  return (
    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 border">
      <div className=" border w-1/5">
        <form>
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Email address"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <a href="#!" className="text-gray-300">
              Forgot password?
            </a>
          </div>

          <div className="text-center lg:text-left">
            <button
              type="button"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
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
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
