import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../components/card'
import fetchMovie from '../store/actions/movies'
import InfiniteScroll from 'react-infinite-scroll-component';

function Home(props) {
  const movies = useSelector(state => state.reduceMovie.movies)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMovie())
  }, [])
  
  function seeDetails (id) {
    props.seeDetails(id)
  }
  function fetchMore () {
    props.search({
      query: props.searchInput,
      page: 1
    })
  }
  return (<div className="flex flex-wrap justify-center">
    {
      movies.length <= 0 ?
        <div className="p-40 text-2xl font-bold">Try searching a movie up there</div>
        :
        // movies.map(item => {
        //   return (<Card movie={item} key={item.imdbID} seeDetails={seeDetails}></Card>)
        // })
        <InfiniteScroll
          className="flex flex-wrap justify-center"
          dataLength={movies.length} //This is important field to render the next data
          next={fetchMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }>{
            movies.map((item, idx) => {
              return (<Card movie={item} key={idx} seeDetails={seeDetails}></Card>)
            })
          }</InfiniteScroll>
    }
  </div>)
}

export default Home