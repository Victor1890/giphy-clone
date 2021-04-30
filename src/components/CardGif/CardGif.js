import { Link } from "wouter";
import { CardGifContent, GifsButton, GifsTitle, GifsImg } from "./styles";

import "./styles.css";

const CardGif = ({ title, id, url }) => (
  <CardGifContent className='Gif'>
    <GifsButton>{/* <h4 id={id}>{title}</h4> */}</GifsButton>
    <Link to={`/gif/${id}`} className='Gif-link'>
      <GifsTitle>{title}</GifsTitle>
      <GifsImg loading='lazy' alt={title} src={url} />
    </Link>
  </CardGifContent>
);

export default CardGif;
