function details(props) {
  const { movie } = props
  return (<div className="p-10 bg-gray-600 min-h-screen">
    <div className="p-5 bg-blue-300 flex items-stretch p-5">
      <div className="w-1/5 block">
        <img src={ movie.Poster } alt="" className="" />
      </div>
      <div className="flex-grow p-5 text-left">
        <h1 className="font-bold text-2xl">{ movie.Title } ({ movie.Year })</h1>
        <p className="text-xl">{ movie.Released } · { movie.Runtime } · { movie.Genre }</p>
        <p className="mt-5 text-lg">{ movie.Plot }</p>
        <p>Director: { movie.Director }</p>
        <p>Writer{ movie.Writer.split(', ').length > 1 ? 's' : ''}: { movie.Writer }</p>
        <p>Actors: { movie.Actors }</p>
        <div className="flex">
          <div className="p-5">
            <div>Metascore</div>
            <div className="font-bold text-2xl">{ movie.Metascore }</div>
          </div>
          <div className="p-5">
            <div>IMDb Rating</div>
            <div className="font-bold text-2xl">{ movie.imdbRating }</div>
          </div>
        </div>
      </div>
    </div>
    { JSON.stringify(props.movie, null, 2) }
  </div>)
}

export default details