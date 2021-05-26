import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import fetchMovie from './store/actions/movies'
import fetchMore from './store/actions/more'
import Home from './views/home'
import Details from './views/details'
import axios from './API/axios'
import Navbar from './components/navbar'

function App() {
  const apiPage = useSelector(state => {
    // dapet data dari state, return apa yang mau diambil
    return state.reduceMovie.apiPage
  })
  const dispatch = useDispatch()
  const [page, setPage] = useState('home')
  const [movie, setMovie] = useState({})
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    dispatch(fetchMovie())
  }, [])

  async function search(input) {
    setSearchInput(input.query)
    if(input.page) {
      dispatch({ type: 'add-page' })
    }
    if(input.clean) {
      dispatch({ type: 'clean' })
    }
    let url = `?apikey=faf7e5bb&page=${apiPage}&s=${input.query}`
    try {
      let { data } = await axios({
        method: 'get',
        url
      })
      // console.log(apiPage, url)
      // console.log(data.Search)
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
      setPage('home')
    } catch (error) {
      console.log({ error })
    }
  }

  async function seeDetails(id) {
    try {
      let { data } = await axios({
        method: 'get',
        url: '?apikey=faf7e5bb&i=' + id
      })
      setMovie(data)
      setPage('details')
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <div className="min-h-screen bg-gray-500 App">
      <Navbar search={search} changePage={ page => setPage(page) }></Navbar>
      <div>
        {
          page === 'home' ?
          <Home seeDetails={ seeDetails } search={ search } searchInput={searchInput}></Home>
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