import API from "../api";
import { allActionCreators } from "./actions";

export const thunks = {
  submitRegForm:
    ({ email, password, name, surname, parentName }) =>
    (dispatch) => {
      return API.registration({ email, password, name, surname, parentName })
        .then((res) => {
          dispatch(thunks.saveUser(res.data));
          dispatch(allActionCreators.clearRegForm());
        })
        .catch((error) => {
          console.log(error);
          dispatch(allActionCreators.changeRegFormField("message", "Ошибка!"));
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
};
