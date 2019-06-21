import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import * as thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import './index.css';
import reducer from './modules/index'
import App from './App';
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareList = process.env.NODE_ENV === 'development' ? [thunk.default, logger] : [thunk.default];
const enhancer = composeEnhancers(applyMiddleware(...middlewareList));

const store = createStore(reducer, enhancer);
const container = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, container
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
