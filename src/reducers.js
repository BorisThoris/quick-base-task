import { combineReducers } from "redux";
import { i18nReducer } from "react-redux-i18n";
import MainReducer from "./duck";

const rootReducer = combineReducers({
  i18n: i18nReducer,
  appData: MainReducer,
});

export default rootReducer;
