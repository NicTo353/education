import axios from "axios";

const _api = axios.create({
  baseURL: "/api/auth",
});

const authAPI = {
  login: ({ email, password }) => {
    return _api.post("/login", { email, password });
  },

  registration: ({ password, email, name, surname, parentName }) => {
    return _api.post("/registration", { password, email, name, surname, parentName });
  },
};

export default authAPI;
