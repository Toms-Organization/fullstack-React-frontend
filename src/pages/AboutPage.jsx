import React from 'react';
import { getData, getAllBlogPosts } from '../services/blogService';
import { useState, useEffect } from 'react';

const AboutPage = () => {
  return (
    <div className=" min-h-screen px-5 py-5 text-2xl underline font-plainheader text-white bg-black">
      <h1>AboutPage</h1>
      <br />
      <p>Gonna be about myself and who i am</p>
    </div>
  );
};

export default AboutPage;
