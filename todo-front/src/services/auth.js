import axios from "axios";

export const loginApi = async (payload) => {
  return axios.post(`${process.env.REACT_APP_API_LOGIN}`, payload)
}