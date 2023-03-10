import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUserAccount } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const CreateUserCard = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCreate = (event) => {
    event.preventDefault();
    const returnFromCreateUser = async () => {
      const reply = await createUserAccount(
        inputs.userName,
        inputs.passWord,
        inputs.email
      );
      console.log(reply.data);
      console.log(reply.headers);
      console.log(reply.status);
      if (reply.data === 'UserName already exists') {
        alert(reply.data);
      }
      if (reply.data === 'User was successfully created') {
        alert('User was Created');
        navigate('/Login');
      }
    };
    returnFromCreateUser();
    //navigate('/Login');

    // Write an if statement depending on the return value from the API
  };

  return (
    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
      <div className="  w-2/6 ">
        <h1 className=" flex justify-center  px-5 py-5 text-3xl font-plainheader ">
          Create a new user!
        </h1>
        <form>
          <div className="mb-6">
            <label className="flex xl:justify-center">
              Enter your username:
            </label>
            <input
              id="userNameInput"
              type="text"
              name="userName"
              value={inputs.userName || ''}
              onChange={handleChange}
              className=" text-center form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="ex. randomUser"
            />
          </div>

          <div className="mb-6">
            <label className="flex xl:justify-center">
              Enter your password:
            </label>
            <input
              id="passwordFormInput"
              name="passWord"
              type="password"
              value={inputs.passWord || ''}
              className="text-center form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="flex xl:justify-center">Enter your email:</label>
            <input
              id="emailFormInput"
              type="text"
              name="email"
              value={inputs.email || ''}
              onChange={handleChange}
              className=" text-center form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="ex. random@gmail.com"
            />
          </div>

          <div className="text-center">
            <button
              onClick={handleCreate}
              type="button"
              className=" w-2/5  mx-3 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Create user!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserCard;
