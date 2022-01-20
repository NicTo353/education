const { AppDataActionTypes } = require("./actions");

const initialState = {
  teachers: [],
  students: [],
  subjects: [],
  groups: [],
  schedules: [],

  isFetching: false,
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

    default:
      return state;
  }
}

export default appDataReducer;
