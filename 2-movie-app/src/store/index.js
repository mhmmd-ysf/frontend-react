import { createStore, combineReducers, applyMiddleware } from 'redux'
import movieReducer from './reducers/movies'
import thunk from 'redux-thunk'

const logger = store => next => action => {
  // console.log('middleware sebelum next')
  next(action)
  // console.log('hasil dari action:', store.getState())
}

const store = createStore(combineReducers({
  reduceMovie: movieReducer
}), applyMiddleware(logger, thunk))

export default store