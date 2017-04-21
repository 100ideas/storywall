import Layout from '../components/Layout.js'
import ListStories from '../components/ListStories.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>

    <h1 className="tc">FUCKING SHIP IT</h1>
    <ListStories stories={props.movies} />

    <ul>
      {props.movies.map((movie) => (
        <li key={movie.imdbID}>
          <Link as={`/p/${movie.imdbID}`} href={`/post?id=${movie.imdbID}`}>
            <a>{movie.Title}</a>
          </Link>
        </li>
      ))}
    </ul>

  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://www.omdbapi.com/?s=never&type=movie')
  const data = await res.json()

  console.log(`Movie data fetched. Count: ${data.Search.length}`)

  return {
    movies: data.Search
  }
}

export default Index
