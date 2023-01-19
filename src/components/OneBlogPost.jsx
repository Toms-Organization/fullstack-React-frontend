import React from 'react';

const OneBlogPost = ({ allBlogPosts }) => {
  return (
    <div
      className="display: flex; flex-direction: column; 
   text-white bg-black "
    >
      {allBlogPosts.map((blogpost, index) => (
        <div key={blogpost.id}>
          <br />
          <h1>
            Topic : {blogpost.topic} Id : {blogpost.id}
          </h1>
          <p>BlogText: {blogpost.text}</p>
          <h2>{blogpost.createdAt}</h2>
          <h2>Written By: {blogpost.byUser}</h2>
        </div>
      ))}
    </div>
  );
};

export default OneBlogPost;
