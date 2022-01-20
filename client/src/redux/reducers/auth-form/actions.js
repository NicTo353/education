export const LoginFormActionTypes = {
  CLEAR_LOGIN_FORM: "CLEAR_LOGIN_FORM",
  CHANGE_LOGIN_FORM_FIELD: "CHANGE_LOGIN_FORM_FIELD",
  SET_LOGIN_FORM_MESSAGE: "SET_LOGIN_FORM_MESSAGE",
};

export const loginFormActionCreators = {
  clearLoginForm: () => ({
    type: LoginFormActionTypes.CLEAR_LOGIN_FORM,
  }),

  changeLoginFormField: (name, value) => ({
    type: LoginFormActionTypes.CHANGE_LOGIN_FORM_FIELD,
    payload: { name, value },
  }),

  setLoginFormMessage: (message) => ({
    type: LoginFormActionTypes.SET_LOGIN_FORM_MESSAGE,
    payload: { message },
  }),
};
