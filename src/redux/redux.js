import { configureStore } from 'reduxjs/toolkit'

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

let store = configureStore(counter)

store.subscribe(() => console.log(store.getState()))
