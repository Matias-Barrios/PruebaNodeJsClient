
import { UPDATE_RESPONSE, UPDATE_FAILURE } from "../constants/action-types";

export function updateResponse(payload) {
  return function(dispatch){
    fetch('http://localhost:8080/hello', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin':'*'
      },
      body: payload
      }).then(function(response) {
        console.log("response ", response.text())
        return response.text()
      }).then(function(data) {
        console.log("data ", data)
         dispatch({
           type: UPDATE_RESPONSE,
           payload: data
         })
      }).catch(function(err){ 
          dispatch({
            type: UPDATE_FAILURE,
            payload: err
          }) 
      });
  }
}

