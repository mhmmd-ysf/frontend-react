import axios from '../../API/axios'

const fetchMore = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'get',
        url: '?apikey=faf7e5bb&s=""&y=' + new Date().getFullYear,
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

export default fetchMore