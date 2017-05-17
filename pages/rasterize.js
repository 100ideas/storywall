import PrintLayout from '../components/PrintLayout.js'
import Story2 from '../components/Story2'

export default () => (
  <PrintLayout>

    <Story2/>

  </PrintLayout>
)


    // this.state = {
    //   roleInput: 'As a Manylabs fellow proud of my success this month,',
    //   needInput: 'I wish it was easy to use the Manylabs.org website to share my accomplishment with an audience 100x bigger than my personal network,',
    //   benefitInput: 'So that I can maximize the number of people who find value in my work (and in the ML org too).',
    //   notesInput: '',
    //   category: '',
    //   // following should not be state; will be set by graphql mutations HoC
    //   id: '0',
    //   author: '',
    //   date: Intl.DateTimeFormat().format(Date.now()),
    //   printed: 'false',
    //   ...props,
    // }

  //   id: Math.round(Math.random() * 1000000).toString(),
  //   author: 'Anonymous Coward',
  //   role: 'local expert working on an open-science project visiting the manylabs website for the first time',
  //   need: 'to feel invited to a ML event and to apply for a fellowship',
  //   benefit: 'I can find out if ML is right for me & my project.',
  //   category: 'growth',
  //   comment: 'first story created during development of app. This is just an area to take miscellaneous notes. Get it? 👍🏼',
  //   ...attrs,
  // }

      {/* <article className="pt2 ph6 w-100">
        <p className="fw7 f3 pb5 mb5 tc ttu bold lh-copy near-black bg-animate hover-bg-mid-gray bg-black-gray">
          test 384px(?) fixed-width single-story print render layout
        </p>
        <p className="f3 lh-copy white-80 bg-animate hover-bg-mid-gray bg-black-gray measure">
          category + pattern
        </p>
        <p className="f3 lh-copy white-80 bg-animate hover-bg-mid-gray bg-black-gray">
          as a...
        </p>
      </article> */}
