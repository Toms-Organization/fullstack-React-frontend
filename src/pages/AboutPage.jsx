import React from 'react';
import { getUsersBlogPosts } from '../services/blogService';
import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import { useSelector } from 'react-redux';

const AboutPage = () => {
  const [blogPosts, setblogPosts] = useState();
  const testUser = useSelector((state) => state.login.value);

  useEffect(() => {
    const getDataConst = async () => {
      const temp = await getUsersBlogPosts(testUser.id, testUser.token);
      setblogPosts(temp);
      console.log(testUser.id);
      console.log(testUser.token);
    };
    getDataConst();
  }, []);

  console.log(blogPosts);
  return (
    <div className="min-h-screen font-plainheader text-white bg-black">
      <h1 className=" flex justify-center text-8xl font-signature p-8">
        This is the BlogPage!
      </h1>
      {blogPosts && <BlogCard allBlogPosts={blogPosts} />}
    </div>
  );
};

export default AboutPage;
