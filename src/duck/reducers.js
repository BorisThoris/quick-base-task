const INITIAL_STATE = { channels: [] };

const MainReducer = (state = INITIAL_STATE, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "RECEIVE_INITIAL_DATA": {
      const { channels } = action;

      return {
        ...newState,
        channels,
      };
    }

    // Here is where my data update logic would go if i had more backend
    case "UPDATE_PROJECT": {
      const { channels } = action;

      return {
        ...newState,
        channels,
      };
    }

    default:
      return newState;
  }
};

export default MainReducer;
