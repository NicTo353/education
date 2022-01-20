import { combineReducers } from "redux";
import appDataReducer from "./app-data";
import loginFromReducer from "./auth-form";
import regFromReducer from "./reg-form";
import userReducer from "./user";

const rootReducer = combineReducers({
  regForm: regFromReducer,
  loginForm: loginFromReducer,
  user: userReducer,
  data: appDataReducer,
});

export default rootReducer;
