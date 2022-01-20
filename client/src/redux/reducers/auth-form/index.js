import { LoginFormActionTypes } from "./actions";

const initialState = {
  email: "",
  password: "",

  message: "",
};

function loginFromReducer(state = initialState, action) {
  switch (action.type) {
    case LoginFormActionTypes.CLEAR_LOGIN_FORM:
      return initialState;

    case LoginFormActionTypes.CHANGE_LOGIN_FORM_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case LoginFormActionTypes.SET_LOGIN_FORM_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };

    default:
      return state;
  }
}

export default loginFromReducer;
