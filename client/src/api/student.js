import axiosInstance from "./axios-instance";

const studentAPI = {
  getStudents: (id = "") => {
    return axiosInstance.get(`/student/${id}`);
  },
};

export default studentAPI;
