import React from 'react';
import { getData, getAllBlogPosts } from '../services/blogService';
import { useState, useEffect } from 'react';

const AboutPage = () => {
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
      <h1>AboutPage</h1>
      <div>
        {blogPosts.map((blog, index) => (
          <p key={blog.id}>{blog.topic}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
