import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'


function App() {
  const movies = useSelector(state => {
    // dapet data dari state, return apa yang mau diambil
    return state.movies
  })
  const dispatch = useDispatch()
  const [inputMovie, setInputMovie] = useState('')

  useEffect(() => {
    console.log({ movies })
  }, [])
  return (
    <div className="App">
      <p>
        ini input movie '{ inputMovie }'
      </p>
      <div className="bg-blue-100">
        <form>
          <input type="text" value={inputMovie} onChange={e => setInputMovie(e.target.value)}></input>
        </form>
      </div>
    </div>
  );
}

export default App;
