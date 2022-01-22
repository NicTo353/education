import { combineReducers } from "redux";
import addScheduleFormReducer from "./add-schedule-form";
import appDataReducer from "./app-data";
import loginFromReducer from "./auth-form";
import regFromReducer from "./reg-form";
import singleSchedulePageReducer from "./single-schedule-page";
import userReducer from "./user";

const rootReducer = combineReducers({
  regForm: regFromReducer,
  loginForm: loginFromReducer,
  user: userReducer,
  data: appDataReducer,
  addScheduleForm: addScheduleFormReducer,
  schedule: singleSchedulePageReducer,
});

export default rootReducer;
