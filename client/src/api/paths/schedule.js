import axiosInstance from "../axios-instance";

const scheduleAPI = {
  createSchedule: ({ slots, name, groupId }) => {
    return axiosInstance.post(`/schedule`, { slots, name, groupId });
  },

  getSchedules: (id = "") => {
    return axiosInstance.get(`/schedule/${id}/`);
  },

  deleteSchedule: ((id = "") => {
    return axiosInstance.delete(`/schedule/${id}`)
  })
};

export default scheduleAPI;
