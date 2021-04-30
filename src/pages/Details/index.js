import CardGif from "components/CardGif/CardGif";
import useGlobalGif from "hooks/useGlobalGif";

const Details = ({ params }) => {
  const gifs = useGlobalGif();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  return (
    <>
      <h1>{gif.title}</h1>
      <CardGif {...gif} />
    </>
  );
};

export default Details;
