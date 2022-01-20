export const RegFormActionTypes = {
  CLEAR_REG_FORM: "CLEAR_REG_FORM",
  CHANGE_REG_FORM_FIELD: "CHANGE_REG_FORM_FIELD",
};

export const regFormActionCreators = {
  clearRegForm: () => ({
    type: RegFormActionTypes.CLEAR_REG_FORM,
  }),

  changeRegFormField: (name, value) => ({
    type: RegFormActionTypes.CHANGE_REG_FORM_FIELD,
    payload: { name, value },
  }),
};
