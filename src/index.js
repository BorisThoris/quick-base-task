import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {
  setLocale,
  loadTranslations,
  syncTranslationWithStore,
} from "react-redux-i18n";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import translations from "./110n/translations";

import App from "./App";

import * as serviceWorker from "./serviceWorker";

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));

const lang = localStorage.getItem("lang");
store.dispatch(setLocale(lang ? lang : "en"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
