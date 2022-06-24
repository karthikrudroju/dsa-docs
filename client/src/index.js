import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import { rootReducers } from "./reducers";

import App from './App';
import "./index.css";

const store = createStore(rootReducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root')
);