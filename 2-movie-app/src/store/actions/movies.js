import axios from '../../API/axios'

const fetchMovie = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'get',
        url: '?apikey=81d0a613&s=""&y=' + new Date().getFullYear,
      })
      if(data.Response === 'False') {
        dispatch({
          type: 'fetch-movies',
          payload: []
        })
      } else {
        dispatch({
          type: 'fetch-movies',
          payload: data.Search
        })
      }
    } catch (error) {
      console.log({ error })
    }
  }
}

export default fetchMovie