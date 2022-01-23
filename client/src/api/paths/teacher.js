import axiosInstance from "../axios-instance";

const teacherAPI = {
  getTeachers: () => {
    return axiosInstance.get("/teacher/");
  },

  createTeacher: ({ password, email, name, surname, parentName, role }) => {
    return axiosInstance.post("/teacher/", { password, email, name, surname, parentName, role });
  },

  deleteTeacher: (id) => {
    return axiosInstance.delete(`/teacher/${id}`);
  },
};

export default teacherAPI;
