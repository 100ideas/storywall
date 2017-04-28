import Layout from '../components/Layout.js'

export default () => (
  <Layout>
    <article className="pt6 ph6 w-100">
      <p className="fw8 pb5 f2 mb5 tc ttu bold lh-copy black-70 bg-animate hover-bg-mid-gray bg-black-gray">This is the about page</p>
      <p className="f4 lh-copy white-80 bg-animate hover-bg-mid-gray bg-black-gray measure">
        Since Next.js server-renders your pages, this allows all the future interaction paths of your app to be instant. Effectively Next.js gives you the great initial download performance of a website, with the ahead-of-time download capabilities of an app. Read more.
      </p>
      <p className="f3 lh-copy white-80 bg-animate hover-bg-mid-gray bg-black-gray">This is the about page e interaction paths of your app to be instant.</p>
    </article>
  </Layout>
)
