import React from 'react';

const BlogPost = ({ allBlogPosts }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Topic</th>
            <th>Text</th>
            <th>Written By</th>
          </tr>
        </thead>
        <tbody>
          {allBlogPosts.map((blogpost, index) => (
            <tr key={blogpost.id}>
              <td>{blogpost.id}</td>
              <td>{blogpost.topic}</td>
              <td>{blogpost.text}</td>
              <td>{blogpost.byUser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogPost;
