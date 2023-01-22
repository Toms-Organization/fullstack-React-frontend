import axios from 'axios';

export const getData = async () => {
  const url = 'http://localhost:8080/openendpoint';
  const stringData = await axios.get(url);
  console.log(stringData.data);
  return stringData.data;
};

export const getAllBlogPosts = async () => {
  const blogUrl = 'http://localhost:8081/opentemporary';
  const responseData = await axios.get(blogUrl);
  //console.log(responseData.data);
  return responseData.data;
};

export const loginToServer = async () => {
  const loginUrl = 'http://localhost:8080/login';
  const res = await axios.post(loginUrl, {
    userName: 'newguy',
    userPassword: 'newpassword',
  });

  //console.log(res.data);
  return res.data;
};

export const loginUser = async (login) => {
  const loginUrl = 'http://localhost:8080/login';
  const res = await axios.post(loginUrl, {
    userName: 'newguy',
    userPassword: 'newpassword',
  });

  return res;
};

export const loginUser2 = async (login) => {
  const userLoginDto = await axios.post(
    'http://localhost:8080/user/login',
    login
  );
  return userLoginDto.data;
};
