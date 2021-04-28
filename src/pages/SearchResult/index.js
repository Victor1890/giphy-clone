import ListOfGif from "../../components/ListOfGif/ListOfGif";
import Spinner from "../../components/Spinner/index";
import { useGifs } from "../../hooks/useGifs";

const SearchResult = ({ params }) => {
  const { keyword } = params;

  console.log("-");

  const { loading, gifs } = useGifs({ keyword });

  return <>{loading ? <Spinner /> : <ListOfGif gifs={gifs} />}</>;
};

export default SearchResult;
