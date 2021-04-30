import { useState } from "react";
import { useLocation } from "wouter";
import ListOfGif from "components/ListOfGif/ListOfGif";
import Spinner from "components/Spinner";
import TrendingSearches from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [, setLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handlSubmit = (event) => {
    event.preventDefault();

    setLocation(`/search/${keyword}`);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setKeyword(value);
  };

  return (
    <>
      <form onSubmit={handlSubmit}>
        <input type='text' value={keyword} onChange={handleChange} />
        <button>Buscar</button>
      </form>
      {loading ? <Spinner /> : <ListOfGif gifs={gifs} />}
      <TrendingSearches />
    </>
  );
};

export default Home;
