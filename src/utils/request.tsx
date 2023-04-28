import axios from "axios";

const request= axios.create({
  baseURL: 'http://localhost:3000',
});
export const get = async (apiPath:string,options ={})=>{
    const respone =await request.get(apiPath,options)
    return respone.data
}
export const post = async (apiPath:string,options ={})=>{
  await request.post(apiPath,options)
}
export default request