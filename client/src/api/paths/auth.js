import axiosInstance from "../axios-instance";
  
const authAPI = {
  login: ({ email, password }) => {
    return axiosInstance.post("/auth/login", { email, password });
  },

  registration: ({ password, email, name, surname, parentName }) => {
    return axiosInstance.post("/auth/registration", { password, email, name, surname, parentName });
  },
};

export default authAPI; 
