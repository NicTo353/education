import { loginFormActionCreators, LoginFormActionTypes } from "./reducers/auth-form/actions";
import { regFormActionCreators, RegFormActionTypes } from "./reducers/reg-form/actions";
import { userActionCreators, UserActionTypes } from "./reducers/user/actions";

export const AllActionTypes = {
  ...RegFormActionTypes,
  ...UserActionTypes,
  ...LoginFormActionTypes
};

export const allActionCreators = {
  ...regFormActionCreators,
  ...userActionCreators,
  ...loginFormActionCreators
};
