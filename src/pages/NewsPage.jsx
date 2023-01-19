import React from 'react';
import { getData, getAllBlogPosts } from '../services/blogService';
import { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';
import FormLoginTest from '../components/FormLoginTest';
import CardTest from '../components/CardTest';

const NewsPage = () => {
  const [blogPosts, setblogPosts] = useState();

  useEffect(() => {
    const getDataConst = async () => {
      const temp = await getAllBlogPosts();
      setblogPosts(temp);
    };
    getDataConst();
  }, []);

  console.log(blogPosts);

  return (
    <div className="min-h-screen font-plainheader text-white bg-black">
      <h1 className=" flex justify-center text-8xl font-signature p-8">
        This is the News Page!
      </h1>
    </div>
  );
};

export default NewsPage;

// <FormLoginTest></FormLoginTest>;
