import Header from './Header'
import Footer from './Footer'

export default ({ children }) => (
  <div
    className="cover"
    style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'url(static/spacex.jpg) no-repeat center fixed'}}>

    <Header/>

    <main style={{flex: '1 0 auto'}}>

      { children }

    </main>

    <Footer/>

  </div>
)
