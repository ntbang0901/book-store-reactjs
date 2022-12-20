import axios from "axios";
import * as actions from "../actions";
import { getRefreshToken } from "../services/authService";

export const request = axios.create({
  baseURL: "https://api.itbook.store/1.0/",
});

export const instance = axios.create({
  baseURL: "http://192.168.128.143:2913/",
  headers: {
    "Content-Type": "application/json",
  },
});
export const publicApi = axios.create({
  baseURL: "http://192.168.128.143:2913/",
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.response.use((response) => {
  // Thrown error for request with OK status code
  const { data } = response;
  return response.data;
});
