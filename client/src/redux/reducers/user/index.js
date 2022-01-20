import { UserActionTypes } from "./actions";

const userData = JSON.parse(localStorage.getItem("userData"));

const initialState = userData
  ? {
      id: userData.id,
      email: userData.email,
      name: userData.name,
      surname: userData.surname,
      parentName: userData.parentName,
      role: userData.role,
      token: userData.token,
    }
  : {};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActionTypes.CLEAR_USER_DATA:
      return initialState;

    case UserActionTypes.SET_USER_DATA:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        surname: action.payload.surname,
        parentName: action.payload.parentName,
        role: action.payload.role,
        token: action.payload.token,
      };

    default:
      return state;
  }
}

export default userReducer;
