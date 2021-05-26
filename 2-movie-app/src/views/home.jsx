import { useSelector } from 'react-redux'
import Card from '../components/card'

function Home(props) {
  const movies = useSelector(state => state.reduceMovie.movies)
  function seeDetails (id) {
    props.seeDetails(id)
  }
  return (<div>
    {
      !movies ?
        <div>{movies} Try adding more characters </div>
        :
        movies.map(item => {
          return (<Card movie={item} key={item.imdbID} seeDetails={seeDetails}></Card>)
        })
    }
  </div>)
}

export default Home