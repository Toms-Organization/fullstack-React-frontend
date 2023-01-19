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
