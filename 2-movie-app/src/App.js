import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import fetchMovie from './store/actions/movies'
import Home from './views/home'
import Details from './views/details'
import axios from './API/axios'
import Navbar from './components/navbar'

function App() {
  const movies = useSelector(state => {
    // dapet data dari state, return apa yang mau diambil
    return state.reduceMovie.movies
  })
  const dispatch = useDispatch()
  const [page, setPage] = useState('home')
  const [movie, setMovie] = useState({})

  useEffect(() => {
    dispatch(fetchMovie())
  }, [])
  // console.log({ movies, dari: 'app.js' })

  async function search(input) {
    try {
      let { data } = await axios({
        method: 'get',
        url: '?apikey=faf7e5bb&s=' + input
      })
      // console.log({ data })
      dispatch({
        type: 'fetch-movies',
        payload: data.Search
      })
      setPage('home')
    } catch (error) {
      console.log({ error })
    }
  }

  async function seeDetails(id) {
    // setPage('details')
    try {
      let { data } = await axios({
        method: 'get',
        url: '?apikey=faf7e5bb&i=' + id
      })
      // console.log({ data, dari: 'details' })
      setMovie(data)
      setPage('details')
    } catch (error) {
      console.log({ error })
    }

  }

  return (
    <div className="App">
      {/* <div className="bg-blue-100">
        <form onSubmit={search}>
          <input type="text" value={inputMovie} onChange={e => setInputMovie(e.target.value)}></input>
          <button type="submit">Search</button>
        </form>
      </div> */}
      <Navbar search={search}></Navbar>
      <div>
        {
          page === 'home' ?
          <Home seeDetails={ seeDetails }></Home>
          : page === 'details' ?
          <Details movie={ movie }></Details>
          :
          <div>Page not found</div>
        }
      </div>
    </div>
  );
}

export default App;
