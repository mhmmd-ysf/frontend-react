import Modal from './modal'

function Card(props) {
  function seeDetails(e) {
    e.preventDefault()
    props.seeDetails(props.movie.imdbID)
  }
  // console.log({movie: props.movie})
  if(props.movie.Poster === 'N/A') {
    props.movie.Poster = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/768px-No_image_available.svg.png'
  }
  return (
    <div className="flex flex-col items-center justify-center p-3 m-3 bg-gray-400 w-60" key={ props.movie.imdbID }>
      <Modal movie={ props.movie }></Modal>
      <h1>
        <a href="/" onClick={ seeDetails } className="break-words">
          { props.movie.Title } ({ props.movie.Year })
        </a>
      </h1>
    </div>
  )
}

export default Card