import axios from 'axios';

let config = {
  headers: {
    Authorization: '',
  },
};

export const getAllBlogPosts = async () => {
  const blogUrl = 'http://localhost:8081/opentemporary';
  const responseData = await axios.get(blogUrl);
  //console.log(responseData.data);
  return responseData.data;
};

export const getUsersBlogPosts = async (userId, token) => {
  config.headers.Authorization = `Bearer ${token}`;

  const Usersblog = 'http://localhost:8081/getusersblogposts';
  const responseData = await axios.post(Usersblog, { id: userId }, config);

  return responseData.data;
};

export const createNewBlogPost = async (
  NameOfTopic,
  NameOfText,
  userId,
  token
) => {
  config.headers.Authorization = `Bearer ${token}`;

  const createBlogPostUrl = 'http://localhost:8081/createblogpost';
  const responseData = await axios.post(
    createBlogPostUrl,
    {
      topic: NameOfTopic,
      text: NameOfText,
      appUserId: userId,
    },
    config
  );

  return responseData.data;
};
