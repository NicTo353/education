export const RegFormActionTypes = {
  CLEAR_REG_FORM: "CLEAR_REG_FORM",
  CHANGE_REG_FORM_FIELD: "CHANGE_REG_FORM_FIELD",
  SET_REG_FORM_MESSAGE: "SET_REG_FORM_MESSAGE",
};

export const regFormActionCreators = {
  clearRegForm: () => ({
    type: RegFormActionTypes.CLEAR_REG_FORM,
  }),

  changeRegFormField: (name, value) => ({
    type: RegFormActionTypes.CHANGE_REG_FORM_FIELD,
    payload: { name, value },
  }),

  setRegFormMessage: (message) => ({
    type: RegFormActionTypes.SET_REG_FORM_MESSAGE,
    payload: { message },
  }),
};
