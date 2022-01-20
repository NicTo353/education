import { regFormActionCreators, RegFormActionTypes } from "./reducers/reg-form/actions";
import { userActionCreators, UserActionTypes } from "./reducers/user/actions";

export const AllActionTypes = {
  ...RegFormActionTypes,
  ...UserActionTypes,
};

export const allActionCreators = {
  ...regFormActionCreators,
  ...userActionCreators,
};
