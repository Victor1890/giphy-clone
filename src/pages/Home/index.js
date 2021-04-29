import { useState } from "react";
import { useLocation } from "wouter";
import ListOfGif from "../../components/ListOfGif/ListOfGif";
import Spinner from "../../components/Spinner";
import { useGifs } from "../../hooks/useGifs";

// const POPULAR_GIFS = ["chile", "matrix", "god of war"];

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
    </>
  );
};

export default Home;
