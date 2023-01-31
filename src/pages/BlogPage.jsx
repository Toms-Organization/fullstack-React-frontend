import React from 'react';
import { getUsersBlogPosts, getAllBlogPosts } from '../services/blogService';
import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogPage = () => {
  const [blogPosts, setblogPosts] = useState();
  const testUser = useSelector((state) => state.login.value);

  useEffect(() => {
    const getDataConst = async () => {
      if (testUser.userName != '') {
        const temp = await getUsersBlogPosts(testUser.id, testUser.token);
        setblogPosts(temp);
        console.log(testUser.id);
        console.log(testUser.token);
      }
    };
    getDataConst();
  }, []);

  console.log('Testing ' + blogPosts);

  return (
    <div className="min-h-screen font-plainheader text-white bg-black">
      <h1 className=" flex justify-center text-8xl font-signature p-8">
        This is the BlogPage!
      </h1>

      <div className=" flex justify-center">
        <Link
          className=" flex justify-center w-1/5  mx-3  px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          to="/CreateBlogPostPage"
        >
          Write a new blog entry!
        </Link>
      </div>

      {blogPosts && <BlogCard allBlogPosts={blogPosts} />}
    </div>
  );
};

export default BlogPage;
