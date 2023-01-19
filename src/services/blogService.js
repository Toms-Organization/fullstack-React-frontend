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

export const loginAndGetToken = async () => {
  let dataToSend = [];
  let response;
  let testObject = {
    id: '',
    userName: '',
    email: '',
    token: '',
  };

  var postData = {
    userName: 'readguy',
    userPassword: 'somepassword',
  };
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  axios
    .post('http://localhost:8080/login', postData, axiosConfig)
    .then((response) => {
      console.log('RESPONSE RECEIVED: ', response.data);
    })
    .catch((err) => {
      console.log('AXIOS ERROR: ', err);
    });

  return dataToSend;
};
