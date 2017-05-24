import Layout from '../components/Layout.js'
import ListStories from '../components/ListStories.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>

    <h1 className="tc">FUCKING SHIP IT</h1>
    <ListStories stories={props.stories}/>

  </Layout>
)

Index.getInitialProps = async function() {

  const res = await fetch('https://hook.io/100ideas/fakerjs-storyprinter?numstories=6')
  const data = await res.json()

  console.log(`mock stories fetched. Count: ${data.length}`)
  console.dir(data)

  return {
    stories: data
  }
}

export default Index
