import ListOfGif from "components/ListOfGif/ListOfGif";
import Spinner from "components/Spinner/index";
import Button from "components/Button";
import { useGifs } from "hooks/useGifs";

const SearchResult = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className='App-title'>{decodeURI(keyword)}</h3>
          <ListOfGif gifs={gifs} />
        </>
      )}
      <br />
      <Button size='medium' onClick={handleNextPage}>
        Get next page
      </Button>
    </>
  );
};

export default SearchResult;
