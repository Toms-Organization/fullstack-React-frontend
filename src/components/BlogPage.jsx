import React from 'react';
import { getData } from '../services/blogService';
import { useState, useEffect } from 'react';

const BlogPage = () => {
  const [ActiveString, setActiveString] = useState();

  useEffect(() => {
    const getDataConst = async () => {
      const temp = await getData();
      setActiveString(temp);
    };
    getDataConst();
  }, []);

  //const myString = getData();
  //console.log(myString);

  return (
    <div>
      <h1>BlogPage</h1>
      <p>{ActiveString}</p>
    </div>
  );
};

export default BlogPage;
