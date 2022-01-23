import axiosInstance from "../axios-instance";

const groupAPI = {
  getGroups: () => {
    return axiosInstance.get("/group/");
  },

  createGroup: (name) => {
    return axiosInstance.post("/group/", { name });
  },

  deleteGroup: (id) => {
    return axiosInstance.delete(`/group/${id}`);
  },


};

export default groupAPI;
