import React from 'react';
import { Link } from 'react-router-dom';
import CreateBlogPostCard from '../components/CreateBlogPostCard';

const CreateBlogPostPage = () => {
  return (
    <div className="min-h-screen font-plainheader text-white bg-black ">
      <h1 className=" flex justify-center text-8xl font-signature p-8">
        Write a new BlogPost!
      </h1>
      <div className=" flex justify-center ">
        <Link
          className=" flex justify-center w-1/5  mx-3  px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          to="/Blog"
        >
          Back to blogpage!
        </Link>
      </div>

      <body className=" flex justify-center ">
        <CreateBlogPostCard></CreateBlogPostCard>
      </body>
    </div>
  );
};

export default CreateBlogPostPage;
