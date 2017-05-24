var moment = require("moment");

export default ({ story }) => (
  <div
    className="w-100 w-50-m w-25-l pa2"
    // style={{display: 'flex'}}
  >
  <article className="mv2 mh2-m pa3 bg-white-50 bl bb b--black-20">
    <a href="" className="pv2 grow db no-underline black">
      <h3 className="f4 fw7 avenir mt0 tc ttu tracked-tight measure-narrow">{story.category}</h3>
      {/* <img className="db w-100" src={story.Poster}/> */}
      <div className="aspect-ratio aspect-ratio--3x4">
        <span
          className="cover bg-center aspect-ratio--object"
          style={{background: `url(${story.rasterizedImg}) no-repeat center`}}
        >
        </span>
      </div>

    </a>
    
    <h3 className="f5 measure">{story.author.name}</h3>
    <p className="f6 lh-copy measure">{story.role}</p>
    <p className="f6 lh-copy measure">{story.need}</p>
    <p className="f6 lh-copy measure">{story.benefit}</p>
    
    <hr />

    <h5>comments:</h5>
    <ul>
      {story.comments.map((c, i) => 
        <li className="f6 lh-copy measure" key={i}>{c}</li>
      )}  
    </ul>

    <hr />

    <p>printed: {story.printed ? moment(story.updatedAt).fromNow() : "not yet"}</p>
    <p>date: {moment(story.createdAt).fromNow()}</p>

  </article>
  </div>
)
