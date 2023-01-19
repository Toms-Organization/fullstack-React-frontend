import React from 'react';
import { getData, getAllBlogPosts } from '../services/blogService';
import { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';

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
    <div className=" min-h-screen px-5 py-5 text-2xl underline font-plainheader text-white bg-black">
      <h1>NewsPage</h1>
      <h3>
        This page will interact with another API getting news in the world
        fitting for me
      </h3>
      {/*  {blogPosts && <BlogPost allBlogPosts={blogPosts} />} */}
    </div>
  );
};

export default NewsPage;
