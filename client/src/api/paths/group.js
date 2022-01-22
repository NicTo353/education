import axiosInstance from "../axios-instance";

const groupAPI = {
  getGroups: (id = "") => {
    return axiosInstance.get(`/group/${id}`);
  },
};

export default groupAPI;
