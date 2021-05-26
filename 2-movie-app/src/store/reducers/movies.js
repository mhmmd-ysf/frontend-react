const initialState = {
  movies: [],
  apiPage: 1
}

const movieReducer = (state = initialState, action) => {
  if(action.type === 'fetch-movies') {
    return {
      ...state,
      movies: state.movies.concat(action.payload),
    }
  } else if(action.type === 'add-page') {
    return {
      ...state,
      apiPage: state.apiPage + 1
    }
  } else if(action.type === 'clean') {
    return {
      ...state,
      movies: [],
      apiPage: 1,
    }
  }
  return state
}

export default movieReducer