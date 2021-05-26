function details(props) {
  const { movie } = props
  return (<div className="w-full p-10">
    <div className="flex items-stretch p-5 bg-blue-300">
      <div className="block w-1/5">
        <img src={ movie.Poster } alt="" className="" />
      </div>
      <div className="flex-grow p-5 text-left">
        <h1 className="text-2xl font-bold">{ movie.Title } ({ movie.Year })</h1>
        <p className="text-xl">{ movie.Released } · { movie.Runtime } · { movie.Genre }</p>
        <p className="my-5 text-lg">{ movie.Plot }</p>
        <p>Director: { movie.Director }</p>
        <p>Writer{ movie.Writer.split(', ').length > 1 ? 's' : ''}: { movie.Writer }</p>
        <p>Actors: { movie.Actors }</p>
        <div className="flex">
          <div className="p-5">
            <div>Metascore</div>
            <div className="text-2xl font-bold">{ movie.Metascore }</div>
          </div>
          <div className="p-5">
            <div>IMDb Rating</div>
            <div className="text-2xl font-bold">{ movie.imdbRating }</div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default details