import axios from "axios";

export const updateTodo = async (todoId, payload) => {

  const requestUrl = process.env.REACT_APP_API_PUT_TODO
  console.log(requestUrl)
  return await axios.put(`${requestUrl}/${todoId}`, payload)
}