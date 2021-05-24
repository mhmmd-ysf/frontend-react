import { createStore } from 'redux'
import movieReducer from './reducers/movies'

const store = createStore(movieReducer)

export default store