function Card (props) {
  // console.log({ props })
  function seeDetails(e) {
    e.preventDefault()
    props.seeDetails(props.movie.imdbID)
  }
  return (<div className="m-3 p-3 bg-gray-400" key={ props.movie.imdbID }>
    <img src={ props.movie.Poster } alt={ props.movie.Title }></img>
    <h1>
      <a href="/" onClick={ seeDetails }>
        { props.movie.Title } ({ props.movie.Year })
      </a>
    </h1>
  </div>)
}

export default Card