import {
  addScheduleFormActionCreators,
  AddScheduleFormActionTypes,
} from "./reducers/add-schedule-form/actions";
import { AppDataActionTypes, appDataAtionCreators } from "./reducers/app-data/actions";
import { loginFormActionCreators, LoginFormActionTypes } from "./reducers/auth-form/actions";
import { regFormActionCreators, RegFormActionTypes } from "./reducers/reg-form/actions";
import { singleSchedulePageActinCreators, SingleSchedulePageActionNames } from "./reducers/single-schedule-page/actions";
import { userActionCreators, UserActionTypes } from "./reducers/user/actions";

export const AllActionTypes = {
  ...RegFormActionTypes,
  ...UserActionTypes,
  ...LoginFormActionTypes,
  ...AppDataActionTypes,
  ...AddScheduleFormActionTypes,
  ...SingleSchedulePageActionNames
};

export const allActionCreators = {
  ...regFormActionCreators,
  ...userActionCreators,
  ...loginFormActionCreators,
  ...appDataAtionCreators,
  ...addScheduleFormActionCreators,
  ...singleSchedulePageActinCreators
};
