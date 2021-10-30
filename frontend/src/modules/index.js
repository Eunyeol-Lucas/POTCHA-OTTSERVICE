import { combineReducers } from "redux";
import catchOn from "./main";
import catchPotato from "./potatoes";
import inform from "./mypage";
import setToken from "./login";

const rootReducer = combineReducers({
  catchOn,
  catchPotato,
  inform,
  setToken,
});

export default rootReducer;
