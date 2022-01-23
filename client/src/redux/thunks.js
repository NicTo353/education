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
    window.location.reload();
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
        if (error.response.status === 403) {
          dispatch(thunks.forgetUser());
        }
        console.log(error);
      });
  },

  updateSchedules: () => async (dispatch) => {
    return API.getSchedules()
      .then((res) => {
        dispatch(allActionCreators.setSchedules(res.data));
      })
      .catch((error) => {
        console.log(error);
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
      return API.createSchedule({ slots, name, groupId })
        .then((res) => {
          dispatch(allActionCreators.resetAddScheduleForm());
          dispatch(thunks.updateSchedules());
          return res;
        })
        .catch((error) => {
          console.log(error);
        });
    },

  updateSingleSchedulePageSlots: (scheduleId) => async (dispatch) => {
    return API.getSchedules(scheduleId)
      .then((res) => {
        dispatch(allActionCreators.setSingleScheduleData(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },

  submitAddTeacherForm:
    ({ email, password, name, surname, parentName, isDean }) =>
    async (dispatch) => {
      const role = isDean ? "DEAN" : "TEACHER";

      return API.createTeacher({ email, password, name, surname, parentName, role })
        .then((res) => {
          dispatch(thunks.updateTeachers());
          dispatch(allActionCreators.clearRegForm());
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

  deleteTeacher: (teacherId) => async (dispatch) => {
    return API.deleteTeacher(teacherId)
      .then((res) => {
        dispatch(thunks.updateTeachers());
      })
      .catch((error) => {
        console.log(error);
      });
  },

  deleteSchedule: (scheduleId) => async (dispatch) => {
    return API.deleteSchedule(scheduleId)
      .then((res) => {
        dispatch(thunks.updateSchedules());
        dispatch(thunks.updateTeachers());
      })
      .catch((error) => {
        console.log(error);
      });
  },

  deleteSubject: (subjectId) => async (dispatch) => {
    return API.deleteSubject(subjectId)
      .then((res) => {
        dispatch(thunks.updateSubjects());
      })
      .catch((error) => {
        console.log(error);
      });
  },

  createSubject: (subjectName) => async (dispatch) => {
    return API.createSubject(subjectName)
      .then((res) => {
        dispatch(thunks.updateSubjects());
        dispatch(thunks.updateSchedules());
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
