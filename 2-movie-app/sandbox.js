// Deklarasi redux & reducer
const redux = require('redux')

const reducer = (state = {}, action) => {
  state = { hello: '' }
  if(action.type == 'greetings') {
    state = { ...state, hello: 'Hello from redux' }
  }
  return state
}

// 1 reducer
const store = redux.createStore(reducer)

// multiple reducers
/*
let combined = redux.combineReducers({
  namaReducer: reducerFunction
})
const store = redux.createStore(combined)
*/



// pemanggilan action -> parameter harus obj =>
/*
obj = {
  type: '<nama type, bebas>',
  payload: <argumen>
}

*/
store.dispatch({ type: 'greetings' })
console.log('state:', store.getState())