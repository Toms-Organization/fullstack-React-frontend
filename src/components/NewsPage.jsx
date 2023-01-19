import React from 'react';
import { getData, getAllBlogPosts } from '../services/blogService';
import { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

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
    <div>
      <h1>NewsPage.... note that this is template...</h1>
      {blogPosts && <BlogPost allBlogPosts={blogPosts} />}
    </div>
  );
};

export default NewsPage;
