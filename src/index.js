import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './global.css'
import Router from './Router'

import { configureStore } from '@reduxjs/toolkit'

function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = configureStore({ reducer: counter })

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'DECREMENT' })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
