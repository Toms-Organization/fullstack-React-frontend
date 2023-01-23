import React from 'react';

const BlogCard = ({ allBlogPosts }) => {
  const parseDate = (date) => {
    let newString = date.substring(0, 10);
    return newString;
  };
  return (
    <div className="px-5 py-5  text-2xl font-plainheader bg-black">
      <div className="rounded-lg shadow-lg flex justify-center p-6 mx-80 text-black bg-black px-2 py-2">
        <div className="p-6">
          {allBlogPosts.map((blogpost, index) => (
            <div
              key={blogpost.id}
              className="bg-zinc-400 rounded-lg shadow-lg my-2 "
            >
              <br />
              <h3 className="flex justify-center font-plaintext text-4xl font-bold mb-8">
                {blogpost.topic}
              </h3>
              <p className=" text-gray-900 font-plaintext text-base mb-8 italic mx-7">
                {blogpost.text}
              </p>
              <div className="flex justify-between">
                <h5 className="text-gray-900 text-base font-medium mb-2 mx-7 flex justify-start">
                  Written by: {blogpost.byUser}
                </h5>
                <h5 className="text-gray-900 text-base font-medium mb-2 mx-7  flex justify-end">
                  Date: {parseDate(blogpost.createdAt)}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
