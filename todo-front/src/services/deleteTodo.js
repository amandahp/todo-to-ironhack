import axios from "axios";

export const deleteTodo = async (todoId) => {
  const requestUrl = process.env.REACT_APP_API_DELETE_TODO
  return await axios.delete(`${requestUrl}/${todoId}`)
}