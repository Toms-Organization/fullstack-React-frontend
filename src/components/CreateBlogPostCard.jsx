import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createNewBlogPost } from '../services/blogService';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CreateBlogPostCard = () => {
  const [inputs, setInputs] = useState({});
  const loggedInUser = useSelector((state) => state.login.value);
  let navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCreate = (event) => {
    event.preventDefault();

    if (loggedInUser.userName == '') {
      alert('Please Login in order to Submit a blog entry!');
      navigate('/login');
    }

    if (loggedInUser.userName != '') {
      const returnFromCreateBlogPost = async () => {
        const reply = await createNewBlogPost(
          inputs.topic,
          inputs.text,
          loggedInUser.id,
          loggedInUser.token
        );
      };
      returnFromCreateBlogPost();
      alert('BlogEntry Submitted');
      navigate('/Blog');
    }
  };

  return (
    <div className=" w-full mx-8 flex xl:justify-center items-center flex-wrap h-full g-6">
      <div className="   w-full">
        <h1 className="  flex xl:justify-center px-5 py-5 text-3xl font-plainheader  ">
          Enter Fields!
        </h1>
        <form>
          <div className="mb-6  ">
            <label className=" px-5 py-5 text-1xl font-plainheader">
              Enter Topic:
            </label>
            <input
              className="flex xl:justify-center form-control  w-1/3 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="topicInput"
              type="text"
              name="topic"
              value={inputs.topic || ''}
              onChange={handleChange}
              placeholder="Monday best day ever!"
            />
          </div>

          <div className="mb-6 ">
            <label className="px-5 py-5 text-1xl font-plainheader">
              Enter your text:
            </label>
            <textarea
              id="textFormInput"
              name="text"
              type="text"
              rows={8}
              value={inputs.text || ''}
              className="text-left form-control block w-3/4 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Once upon a time..."
              onChange={handleChange}
            />
          </div>

          <div className="text-left ">
            <button
              onClick={handleCreate}
              type="button"
              className=" inline-block px-7 py-3 my-7 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Submit Blog Entry!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateBlogPostCard;
