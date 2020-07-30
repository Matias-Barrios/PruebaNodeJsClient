import React from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.css';
import ResponseArea from './components/ResponseArea';
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import store from "./js/store/index";

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header>
        </Header>
        <Input>
        </Input>
        <ResponseArea>
        </ResponseArea>
      </Provider>
    </div>
  );
}

export default App;
