import axios from "axios";

export const getTodo = async () => {
  const requestUrl = process.env.REACT_APP_API_GET_TODO;
  const { data } = await axios.get(requestUrl);

  return data;
}