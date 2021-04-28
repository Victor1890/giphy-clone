import { Link } from "wouter";

import "./CardGif.css";

const CardGif = ({ title, id, url }) => (
  <div className='Gif'>
    <div className='Gif-buttons'>
      <h4 id={id}>{title}</h4>
    </div>
    <Link to={`/gif/${id}`} className='Gif-link'>
      <h4>{title}</h4>
      <img loading='lazy' alt={title} src={url} />
    </Link>
  </div>
);

export default CardGif;
