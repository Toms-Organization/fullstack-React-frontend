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
    <div>
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
