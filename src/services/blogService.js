import axios from 'axios';

const url = 'http://localhost:8080/openendpoint';

export const getData = async () => {
  const stringData = await axios.get(url);
  console.log(stringData.data);
  return stringData.data;
};
