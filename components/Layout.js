import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// }
//
//   <div style={layoutStyle}>
//     <Header />
//     {props.children}
//   </div>

export default ({ children, title = 'default title' }) => (
<div
  className="cover bg-left bg-center-l"
  style={{display: 'flex', flexDirection: 'column', background: 'url(http://mrmrs.io/photos/u/009.jpg) no-repeat center'}}>

  <Head>
    <title>{ title }</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"/>
  </Head>

  <main
    // className="vh-100 relative"
    // className="vh-100 w-100 cover bg-left bg-center-l"
    // style={{background: 'url(http://mrmrs.io/photos/u/009.jpg) no-repeat center'}}
  >

    <Header/>


    { children }



  </main>

  <Footer/>

</div>
)
