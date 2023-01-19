import React from 'react';
import { getData, getAllBlogPosts } from '../services/blogService';
import { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';
import OneBlogPost from '../components/OneBlogPost';

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
    <div className="min-h-screen font-plainheader text-white bg-black">
      <h1 className=" flex justify-center text-6xl font-signature">
        This is the BlogPage!
      </h1>
      <br />
      {blogPosts && <OneBlogPost allBlogPosts={blogPosts} />}
    </div>
  );
};

export default BlogPage;
