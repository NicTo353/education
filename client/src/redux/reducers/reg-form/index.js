import { RegFormActionTypes } from "./actions";

const initialState = {
  email: "",
  password: "",
  name: "",
  surname: "",
  parentName: "",
  isDean: false,

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

    case RegFormActionTypes.SET_REG_FORM_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };

    default:
      return state;
  }
}

export default regFromReducer;
