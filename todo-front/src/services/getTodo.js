import axios from "axios";

export const getTodo = async (email) => {
  const requestUrl = process.env.REACT_APP_API_GET_TODO;
  const { data } = await axios.get(`${requestUrl}/${email}`);

  return data;
}