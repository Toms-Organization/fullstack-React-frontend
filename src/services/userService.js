import axios from 'axios';

let config = {
  headers: {
    Authorization: '',
  },
};

export const saveUser = async (user) => {
  const userRes = await axios.post('http://localhost:8080/user/add', user);
  return userRes.data;
};

export const loginUserAGAIN = async (userName, userPassword) => {
  // console.log(userName);
  // console.log(userPassword);

  const UserLoginDATA = await axios.post('http://localhost:8080/login', {
    userPassword: userPassword,
    userName: userName,
  });
  return UserLoginDATA;
};

export const getUserInfo = async (userId, token) => {
  config.headers.Authorization = `Bearer ${token}`;
  const info = await axios.get(
    `http://localhost:8080/user/getUserInfo/${userId}`,
    config
  );
  return info.data;
};

export const createUserAccount = async (userName, userPassword, email) => {
  const createResponse = await axios.post('http://localhost:8080/createuser', {
    userName: userName,
    userPassword: userPassword,
    email: email,
  });
  return createResponse;
};
