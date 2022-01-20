export const AppDataActionTypes = {
  SET_TEACHERS: "SET_TEACHERS",
  SET_SUBJECTS: "SET_SUBJECTS",
  SET_GROUPS: "SET_GROUPS",
  SET_STUDENTS: "SET_STUDENTS",
  SET_SCHEDULES: "SET_SCHEDULES",
  SET_IS_FETCHING: "SET_IS_FETCHING",
};

export const appDataAtionCreators = {
  setTeachers: (teachers) => {
    return {
      type: AppDataActionTypes.SET_TEACHERS,
      payload: {
        teachers,
      },
    };
  },

  setStudents: (students) => ({
    type: AppDataActionTypes.SET_STUDENTS,
    payload: {
      students,
    },
  }),

  setSubjects: (subjects) => ({
    type: AppDataActionTypes.SET_SUBJECTS,
    payload: {
      subjects,
    },
  }),

  setGroups: (groups) => ({
    type: AppDataActionTypes.SET_GROUPS,
    payload: {
      groups,
    },
  }),

  setSchedules: (schedules) => ({
    type: AppDataActionTypes.SET_SCHEDULES,
    payload: {
      schedules,
    },
  }),

  setIsFetching: (isFetching) => ({
    type: AppDataActionTypes.SET_IS_FETCHING,
    payload: {
      isFetching,
    },
  }),
};
