import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import the App container component
import App from './App'

// Import the reducer and create a store
import { reducer } from './todoListRedux'
const store = createStore(reducer)

// Pass the store into the Provider
const AppWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(AppWithStore, document.querySelector('#root'))