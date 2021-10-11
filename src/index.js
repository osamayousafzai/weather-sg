import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';

// Below are of some middleware being imported
// import { promiseMiddleware } from "redux-promise";
// import ReduxThunk from "redux-thunk";
// import logger from "redux-logger";
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// Below is the list of middleware imported listed here seperated by commas
//promiseMiddleware,
//ReduxThunk,
//logger

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
