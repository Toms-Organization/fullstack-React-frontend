import React from 'react';
import { loginToServer } from '../services/blogService';
import { useState, useEffect } from 'react';
import FormLoginTest from '../components/FormLoginTest';
import LoginCard from '../components/LoginCard';

const NewsPage = () => {
  // Note: This will not work cuz at first the data isnt fetched
  // which means u will get a error... SO write logic to check if data is here and then display

  const [userData, setuserData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await loginToServer();
      setuserData(data);
    };
    getData();
  }, []);

  console.log(userData);

  return (
    <div className="min-h-screen font-plainheader text-white bg-black text-base">
      <h1 className=" flex justify-center text-8xl font-signature p-8 ">
        This is the News Page!
      </h1>
    </div>
  );
};

export default NewsPage;

/*       <p> userId: {userData.id}</p>
      <p> userName: {userData.userName}</p>
      <p> userEmail: {userData.email}</p>
      <p> userToken: {userData.token}</p> */
