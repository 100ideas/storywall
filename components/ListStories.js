// import React, {Component} from 'react'
import Story from './Story'
// import StoryPrintView from './StoryPrintView'

const ListStories = ({ stories }) => (
  <section
    className="w-100 ba"
    // style={{display: 'flex', flexWrap: 'wrap', background: 'url(http://mrmrs.io/photos/u/009.jpg) no-repeat center'}}
    style={{display: 'flex', flexWrap: 'wrap'}}
  >

    {stories.map((story) => (

      <Story story={story} key={story.imdbID}/>

    ))}

  </section>
)

export default ListStories
