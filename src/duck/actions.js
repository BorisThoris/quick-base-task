import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
  requestInitialData: [""],
  receiveInitialData: ["channels"],

  //Where update logic would go
  startProjectUpdate: [""],
  finishProjectUpdate: ["channels "],
});

export { Creators, Types };
