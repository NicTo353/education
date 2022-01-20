import { RegFormActionTypes } from "./actions";

const initialState = {
  email: "",
  password: "",
  name: "",
  surname: "",
  parentName: "",

  message: "",
};

function regFromReducer(state = initialState, action) {
  switch (action.type) {
    case RegFormActionTypes.CLEAR_REG_FORM:
      return initialState;

    case RegFormActionTypes.CHANGE_REG_FORM_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
}

export default regFromReducer;
