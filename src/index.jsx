import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Import the App container component
import App from './containers';

// Import the reducer and create a store
import reducer from './reducer';
import ErrorBoundary from './components/error';

const store = createStore(reducer, applyMiddleware(thunk));
import 'todomvc-app-css/index.css'

// Pass the store into the Provider
const AppWithStore = (
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);

render(AppWithStore, document.querySelector('#root'));
