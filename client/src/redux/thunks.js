import API from "../api";
import { allActionCreators } from "./actions";

export const thunks = {
  submitRegForm:
    ({ email, password, name, surname, parentName }) =>
    async (dispatch) => {
      return API.registration({ email, password, name, surname, parentName })
        .then((res) => {
          dispatch(thunks.saveUser(res.data));
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
          const message = error.response.data.message;
          if (message) {
            dispatch(allActionCreators.setRegFormMessage(message));
          } else {
            dispatch(allActionCreators.setRegFormMessage("Ошибка!"));
          }
        });
    },

  submitLoginForm:
    ({ email, password }) =>
    async (dispatch) => {
      return API.login({ email, password })
        .then((res) => {
          dispatch(thunks.saveUser(res.data));
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
          const message = error.response.data.message;
          if (message) {
            dispatch(allActionCreators.setLoginFormMessage(message));
          } else {
            dispatch(allActionCreators.setLoginFormMessage("Ошибка!"));
          }
        });
    },

  saveUser:
    ({ token, id, email, name, surname, parentName, role }) =>
    (dispatch) => {
      const userData = { token, id, email, name, surname, parentName, role };
      dispatch(allActionCreators.setUserData(userData));
      localStorage.setItem("userData", JSON.stringify(userData));
    },

  forgetUser: () => (dispatch) => {
    dispatch(allActionCreators.clearUserData());
    localStorage.removeItem("userData");
  },

  updateTeachers: () => async (dispatch) => {
    return API.getTeachers()
      .then((res) => {
        dispatch(allActionCreators.setTeachers(res.data));
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          dispatch(thunks.forgetUser());
        }
      });
  },

  updateSubjects: () => async (dispatch) => {
    return API.getSubjects()
      .then((res) => {
        dispatch(allActionCreators.setSubjects(res.data));
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          dispatch(thunks.forgetUser());
        }
      });
  },

  updateStudents: () => async (dispatch) => {
    return API.getStudents()
      .then((res) => {
        dispatch(allActionCreators.setStudents(res.data));
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          dispatch(thunks.forgetUser());
        }
      });
  },

  updateGroups: () => async (dispatch) => {
    return API.getGroups()
      .then((res) => {
        dispatch(allActionCreators.setGroups(res.data));
        return res.data;
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 403) {
          dispatch(thunks.forgetUser());
        }
      });
  },

  updateAll: () => async (dispatch) => {
    return Promise.all([
      dispatch(thunks.updateGroups()),
      dispatch(thunks.updateStudents()),
      dispatch(thunks.updateSubjects()),
      dispatch(thunks.updateTeachers()),
    ]);
  },

  submitAddScheduleForm:
    ({ slots, name, groupId }) =>
    async (dispatch) => {
      return API.createSchedule({ slots, name, groupId }).catch((error) => {
        console.log(error);
      });
    },
};
