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
  className="cover"
  style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'url(http://mrmrs.io/photos/u/009.jpg) no-repeat center fixed'}}>

  <Head>
    <title>{ title }</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"/>
    <style type="text/css">
      {'body {background:blanchedalmond;}'}
    </style>
  </Head>

  <Header/>

  <main
    // className="vh-100 relative"
    // className="vh-100 w-100 cover bg-left bg-center-l"
    style={{flex: '1 0 auto'}}
  >

    { children }

  </main>

  <Footer/>

</div>
)
