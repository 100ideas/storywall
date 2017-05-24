// import React, {Component} from 'react'
import Story from './Story'
// import StoryPrintView from './StoryPrintView'

const ListStories = ({ stories }) => (
  <section
    className="w-100 ph4"
    // style={{display: 'flex', flexWrap: 'wrap', background: 'url(http://mrmrs.io/photos/u/009.jpg) no-repeat center'}}
    style={{display: 'flex', flexWrap: 'wrap'}}
  >

    { stories.map((s, i) => <Story story={s} key={i}/>) }

    {process.env.NODE_ENV !== 'production' &&
      <div className="mt3 ph3 bl">
        <h3>sample story JSON</h3>
        <pre className="code f6">{JSON.stringify(stories[0], true, 2)}</pre>
      </div>
    }
    
  </section>
)

export default ListStories
