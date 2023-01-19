import React from 'react';
import { getData, getAllBlogPosts } from '../services/blogService';
import { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';
import FormLoginTest from '../components/FormLoginTest';

const NewsPage = () => {
  /*   const [blogPosts, setblogPosts] = useState();

  useEffect(() => {
    const getDataConst = async () => {
      const temp = await getAllBlogPosts();
      setblogPosts(temp);
    };
    getDataConst();
  }, []);

  console.log(blogPosts); */

  return (
    <div>
      <FormLoginTest></FormLoginTest>
    </div>
  );
};

export default NewsPage;
