import CardGif from "../CardGif/CardGif";

import "./styles.css";

const ListOfGif = ({ gifs }) => {
  return (
    <div className='ListOfGifs'>
      {gifs.map((gif) => (
        <CardGif key={gif.id} {...gif} />
      ))}
    </div>
  );
};

export default ListOfGif;
