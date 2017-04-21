
export default ({ story }) => (
  <div
    className="fl w-100 w-50-m w-25-l pa3-m pa3-l bg-white-50 ba"
    // style={{display: 'flex'}}
  >
    <a href="" className="pv2 grow db no-underline black">
      {/* <img className="db w-100" src={story.Poster}/> */}
      <div className="aspect-ratio aspect-ratio--3x4">
        <span
          className="cover bg-center aspect-ratio--object"
          style={{background: `url(${story.Poster}) no-repeat center`}}
        >
        </span>
      </div>

    </a>
    <ul>
      <li className="f6 lh-copy measure">{story.Title}</li>
      {/* <li className="f6 lh-copy measure">{story.Poster}</li> */}
    </ul>
  </div>
)
