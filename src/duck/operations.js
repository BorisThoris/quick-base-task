// operations.js
import { Creators } from "./actions";

const requestInitialDataAction = Creators.requestInitialData;
const receiveInitialDataAction = Creators.receiveInitialData;

const startProjectUpdate = Creators.startProjectUpdate;

const fetchInitialData = () => {
  return (dispatch) => {
    dispatch(requestInitialDataAction());

    return fetch("api/-/channels", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    }).then((response) => {
      response.json().then((data) => {
        dispatch(receiveInitialDataAction(data));
      });
    });
  };
};

//  Where my update logic would go
const updateProject = (passedState) => {
  return (dispatch) => {
    dispatch(startProjectUpdate());
    /*eslint-disable */
    //suppress all warnings between comments
    return fetch(`http://localhost:5000/db`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(passedState),
    })
      .then((response) => response.json())
      .then((json) => {
        const responseData = json;
        dispatch(receiveInitialDataAction(responseData));
      });
    /*eslint-enable */
  };
};

export default {
  fetchInitialData,
  updateProject,
};
