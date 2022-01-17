import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppWrapper from './AppWrapper'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
