import React from 'react';
import ReactDOM from 'react-dom';
import './base.scss';
import App from './App/App';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools())


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root'));

// serviceWorker.unregister();

