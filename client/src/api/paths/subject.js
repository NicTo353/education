import axiosInstance from "../axios-instance";

const subjectAPI = {
  getSubjects: (id = "") => {
    return axiosInstance.get(`/subject/${id}`);
  },

  createSubject: (name) => {
    return axiosInstance.post("/subject/", { name });
  },

  deleteSubject: (id) => {
    return axiosInstance.delete(`/subject/${id}`);
  },
};

export default subjectAPI;
