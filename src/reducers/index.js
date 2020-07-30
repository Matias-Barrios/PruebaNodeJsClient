import { UPDATE_RESPONSE, UPDATE_FAILURE } from "../constants/action-types";

const initialState = {
  response: ''
};

function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_RESPONSE) {
    return {
      ...state,
      response : action.payload
    }
  }
  if (action.type === UPDATE_FAILURE) {
    return {
      ...state,
      response : action.payload
    }
  }
  return state;
}

export default rootReducer;