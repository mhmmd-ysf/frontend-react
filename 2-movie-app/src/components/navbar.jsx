import { useState } from 'react'

function Navbar(props) {
  const [inputMovie, setInputMovie] = useState('')
  
  function search(e) {
    e.preventDefault()
    props.search(inputMovie)
  }

  return (<div className="bg-blue-100">
    <form onSubmit={search}>
      <input type="text" value={inputMovie} onChange={e => setInputMovie(e.target.value)}></input>
      <button type="submit">Search</button>
    </form>
  </div>)
}

export default Navbar