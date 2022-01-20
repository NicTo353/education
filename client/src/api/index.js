import authAPI from "./auth";
import groupAPI from "./groups";
import studentAPI from "./student";
import subjectAPI from "./subject";
import teacherAPI from "./teacher";

const API = {
  ...authAPI,
  ...teacherAPI,
  ...subjectAPI,
  ...studentAPI,
  ...groupAPI,
};

export default API;
