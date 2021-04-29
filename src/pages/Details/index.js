import CardGif from "../../components/CardGif/CardGif";
import useGlobalGif from "../../hooks/useGlobalGif";

const Details = ({ params }) => {
  const gifs = useGlobalGif();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  return (
    <>
      <CardGif {...gif} />
    </>
  );
};

export default Details;
