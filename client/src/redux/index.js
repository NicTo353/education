import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import loginFromReducer from "./reducers/auth-form";
import regFromReducer from "./reducers/reg-form";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({
  regForm: regFromReducer,
  loginForm: loginFromReducer,
  user: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
