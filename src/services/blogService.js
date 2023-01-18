import axios from 'axios';

const url = 'http://localhost:8080/openendpoint';

export const getData = async () => {
  const stringData = await axios.get(url);
  console.log(stringData.data);
  return stringData.data;
};

/* export const getData = async (data) => {
  const quizObject = await axios.get(baseurl, { params: data });
  return quizObject.data.results;
};
 */
