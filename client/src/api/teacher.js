import axiosInstance from "./axios-instance";

const teacherAPI = {
  getTeachers: (id = "") => {
    return axiosInstance.get(`/teacher/${id}`);
  },
};

export default teacherAPI;
