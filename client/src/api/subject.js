import axiosInstance from "./axios-instance";

const subjectAPI = {
  getSubjects: (id = "") => {
    return axiosInstance.get(`/subject/${id}`);
  },
};

export default subjectAPI;
