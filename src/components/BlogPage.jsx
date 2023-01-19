import React from 'react';
import { getData, getAllBlogPosts } from '../services/blogService';
import { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

const BlogPage = () => {
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
      <h1>This is The BLOGPAGE!</h1>
      <br />
      {blogPosts && <BlogPost allBlogPosts={blogPosts} />}
    </div>
  );
};

export default BlogPage;
