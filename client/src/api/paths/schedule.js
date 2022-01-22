import axiosInstance from "../axios-instance";

const scheduleAPI = {
  createSchedule: ({ slots, name, groupId }) => {
    return axiosInstance.post(`/schedule`, { slots, name, groupId });
  },
};

export default scheduleAPI;
