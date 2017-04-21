// import React, {Component} from 'react'
import Story from './Story'
// import StoryPrintView from './StoryPrintView'

const ListStories = ({ stories }) => (
  <section
    className="fl w-100 ba"
    style={{display: 'flex', flexWrap: 'wrap'}}
  >

    {stories.map((story) => (

      <Story story={story} key={story.imdbID}/>

    ))}

  </section>
)

export default ListStories
