import { UPDATE_RESPONSE } from "../constants/action-types";

const initialState = {
  response: ''
};

function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_RESPONSE) {
    state.response = action.payload;
  }
  return state;
}

export default rootReducer;