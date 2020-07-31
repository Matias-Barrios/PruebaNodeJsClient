import React from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.css';
import ResponseArea from './components/ResponseArea';
import { Provider } from "react-redux";
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="container App">
        <Header>
        </Header>
        <Input>
        </Input>
        <ResponseArea>
        </ResponseArea>
    </div>
    </Provider>
  );
}

export default App;
