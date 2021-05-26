import { useState } from 'react'

function Navbar(props) {
  const [inputMovie, setInputMovie] = useState('')
  
  function search(e) {
    e.preventDefault()
    props.search({ query: inputMovie, clean: true })
  }

  function changePage(e) {
    e.preventDefault()
    setInputMovie('')
    props.changePage('home')
  }

  return (<div className="bg-blue-100">
    <div className="px-8 mx-auto">
      <div className="flex justify-between">
        <a href="/" onClick={ changePage } className="flex px-2 py-5 space-x-4 text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="font-bold">Stockbit Movie Database</span>
        </a>
        <form className="flex px-2 py-5 overflow-hidden border" onSubmit={search}>
          <input type="text" placeholder="Search movies here" className="px-3 py-1 rounded " value={inputMovie} onChange={e => setInputMovie(e.target.value)}></input>
          <button className="flex px-3 py-2 ml-3 bg-blue-500 border-l rounded" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>)
}

export default Navbar