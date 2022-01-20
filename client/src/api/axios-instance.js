import axios from "axios";
import store from "../redux";

const token = store.getState().user.token;

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    Authorization: token,
  },
});

export default axiosInstance;
