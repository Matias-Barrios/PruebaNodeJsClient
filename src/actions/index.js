
import { UPDATE_RESPONSE } from "../constants/action-types";

export function updateResponse(payload) {
  return function(dispatch){
    fetch('http://localhost:8080/hello', {
      method: 'POST',
      headers: {
          'Content-Type': 'text/plain'
      },
      body: payload
      }).then(function(response) {
        return response.text()
      }).then(function(data) {
         dispatch({
           type: UPDATE_RESPONSE,
           payload: data
         })
      }).catch(function(err){ 
          alert(err)
      });
  }
}

