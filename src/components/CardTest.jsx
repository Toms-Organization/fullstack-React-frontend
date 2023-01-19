import React from 'react';

const CardTest = ({ allBlogPosts }) => {
  return (
    <div className="px-5 py-5  text-2xl font-plainheader bg-black">
      <div class="rounded-lg shadow-lg flex justify-center p-6 mx-60 text-black bg-black px-2 py-2">
        <div class="p-6">
          {allBlogPosts.map((blogpost, index) => (
            <div
              key={blogpost.id}
              className="bg-zinc-400 rounded-lg shadow-lg my-2 "
            >
              <br />
              <h3 class="flex justify-center font-plaintext text-4xl font-bold mb-8">
                {blogpost.topic}
              </h3>
              <p class=" text-gray-900 font-plaintext text-base mb-8 italic mx-7">
                {blogpost.text}
              </p>
              <div class="flex justify-between">
                <h5 class="text-gray-900 text-base font-medium mb-2 mx-7 flex justify-start">
                  Written by: {blogpost.byUser}
                </h5>
                <h5 class="text-gray-900 text-base font-medium mb-2 mx-7  flex justify-end">
                  Date: {blogpost.createdAt}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardTest;
