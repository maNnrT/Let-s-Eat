import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,


});
export const get = async (apiPath: string, options = {}) => {
  const respone = await request.get(apiPath, options);
  return respone.data;
};
export const post = async (apiPath: string, options = {}) => {
  await request.post(apiPath, options);
};
export const put = async (apiPath: string, options = {}) => {
  await request.put(apiPath, options);
};
export default request;
