import { combineReducers } from "redux";
import addScheduleFormReducer from "./add-schedule-form";
import appDataReducer from "./app-data";
import loginFromReducer from "./auth-form";
import regFromReducer from "./reg-form";
import userReducer from "./user";

const rootReducer = combineReducers({
  regForm: regFromReducer,
  loginForm: loginFromReducer,
  user: userReducer,
  data: appDataReducer,
  schedule: addScheduleFormReducer,
});

export default rootReducer;
