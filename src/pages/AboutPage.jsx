import React from 'react';
import { getData, getAllBlogPosts } from '../services/blogService';
import { useState, useEffect } from 'react';

const AboutPage = () => {
  return (
    <div>
      <h1 className="px-5 py-5 text-2xl font-plainheader underline">
        AboutPage
      </h1>
      <br />
      <p className="px-5 py-5 text-1xl font-plaintext">
        Gonna be about myself and who i am
      </p>
    </div>
  );
};

export default AboutPage;
