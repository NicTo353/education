const { AppDataActionTypes } = require("./actions");

const initialState = {
  dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"],
  lessonsTime: ["9:00", "10:45", "12:30", "14:15", "16:00"],
  teachers: [],
  students: [],
  subjects: [],
  groups: [],
  schedules: [],
};

function appDataReducer(state = initialState, action) {
  switch (action.type) {
    case AppDataActionTypes.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };

    case AppDataActionTypes.SET_TEACHERS:
      return {
        ...state,
        teachers: action.payload.teachers,
      };

    case AppDataActionTypes.SET_SUBJECTS:
      return {
        ...state,
        subjects: action.payload.subjects,
      };

    case AppDataActionTypes.SET_STUDENTS:
      return {
        ...state,
        students: action.payload.students,
      };

    case AppDataActionTypes.SET_GROUPS:
      return {
        ...state,
        groups: action.payload.groups,
      };

    case AppDataActionTypes.SET_SCHEDULES:
      return {
        ...state,
        schedules: action.payload.schedules,
      };

    default:
      return state;
  }
}

export default appDataReducer;
