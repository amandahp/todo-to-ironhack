import axios from "axios";

export const registerApi = async (payload) => {
  return axios.post(`${process.env.REACT_APP_API_SIGNUP}`, payload)
}