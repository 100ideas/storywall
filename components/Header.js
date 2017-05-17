import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <header className="bg-black-80">
      <nav className="dt w-100 mw8 center">
        <div className="dtc w2 v-mid pa3">
          <a href="/" className="dib b f2 lh-title hover-white no-underline white-70">
            BS
          </a>
        </div>
        <div className="dtc v-mid tr pa3">
          <Link href="/">
            <a className="f6 fw4 hover-white no-underline white-70 dib-l pv2 ph3">Home</a>
          </Link>
          <Link href="/about">
            <a className="f6 fw4 hover-white no-underline white-70 dib-l pv2 ph3">About</a>
          </Link>
          <Link href="/rasterize">
            <a className="f6 fw4 hover-white no-underline white-70 dib-l pv2 ph3">Rasterize</a>
          </Link>
          <Link href="/create">
            <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba">Create</a>
          </Link>
        </div>
      </nav>

    </header>
)

export default Header
