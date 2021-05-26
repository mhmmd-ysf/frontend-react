const initialState = {
  movies: [ {contoh: 1} ]
}

const movieReducer = (state = initialState, action) => {
  // console.log({ state, action })
  if(action.type === 'fetch-movies') {
    return { ...state, movies: action.payload }
  }
  return state
}

export default movieReducer