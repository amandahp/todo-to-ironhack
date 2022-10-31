import axios from "axios";

export const postTodo = async (payload) => {
  console.log(payload)
  const requestUrl = process.env.REACT_APP_API_POST_TODO
  return await axios.post(requestUrl, payload)
}