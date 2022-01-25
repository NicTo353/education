import authAPI from "./paths/auth";
import groupAPI from "./paths/group";
import scheduleAPI from "./paths/schedule";
import subjectAPI from "./paths/subject";
import teacherAPI from "./paths/teacher";

const API = {
  ...authAPI,
  ...teacherAPI,
  ...subjectAPI,
  ...groupAPI,
  ...scheduleAPI
};

export default API;
