import React from "react"
import PrintLayout from "../components/PrintLayout.js"
import Moment from "moment"
import fetch from 'isomorphic-unfetch'

// import Story2 from '../components/Story2'

// when you need initial state, use React class & getInitialProps
//
//  Note: getInitialProps can not be used in children components. Only in pages.
//
// https://github.com/zeit/next.js/tree/v3-beta#fetching-data-and-component-lifecycle

// <PrintLayout>
// </PrintLayout>

const Rasterize = ({ story }) => (

  <PrintLayout>

  <main className="fl ba b--black-40 measure-narrow ma2 story">

    <header className="f3 fw7 bg-near-black white pv3 cf">
      <div className="fl ph3">
        a new thought...
      </div>
    </header>

    <section className="pa3">
      <p><span className='f4 fw9'>{story.role[0]}</span>{story.role[1]}</p>

      <p><span className='f4 fw9'>{story.need[0]}</span>{story.need[1]}</p>

      <p><span className='f4 fw9'>{story.benefit[0]}</span>{story.benefit[1]}</p>

      <div className='bt b--moon-gray pt1'>
        <p><strong>notes: </strong>{story.comments}</p>
        <p className='mb0'><strong>stars: </strong>{story.notes}</p>
      </div>

    </section>

    <footer className="f3 fw7 bg-near-black white pv3 cf">
      <div className="fl w-50 ph3">
        {Moment().format("YYMMDD_HHMMss")}
      </div>
      <div className="fl w-50 pr3 tr dark-red">print</div>
    </footer>

  </main>
  </PrintLayout>
)

Rasterize.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()

  let mockInitProps = {
    id: Math.round(Math.random() * 1000000).toString(),
    author: 'Anonymous Coward',
    role: 'As a local expert working on an open-science project visiting the manylabs website for the first time,',
    need: 'I want to feel invited to a ML event and to apply for a fellowship,',
    benefit: 'so that I can find out if ML is right for me & my project.',
    notes: json.stargazers_count,
    category: 'growth',
    comments: 'first story created during development of app. This is just an area to take miscellaneous notes. Get it? 👍🏼'
  }

  // form input will split role|need|benefit strings into 2-element array,
  // but we'll just pretend here

  let splitAfterTwoWords = /^(\w+\s+\w+)([^]+)/m
  let baa = ''
  for (let prop of ['role', 'need', 'benefit']) {
    // baa = splitAfterTwoWords.exec(mockInitProps[prop])
    // console.log("\n\n--------------------\n\n")
    // console.log(prop)
    // console.log(mockInitProps[prop])
    // console.log(splitAfterTwoWords.exec(mockInitProps[prop]))
    mockInitProps[prop] = splitAfterTwoWords.exec(mockInitProps[prop]).slice(1)


    // console.log
  }
  // console.log("\n\n--------------------\n\n")

  // console.dir(mockInitProps)
  return { story: mockInitProps }
}

export default Rasterize
