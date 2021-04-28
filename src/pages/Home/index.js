import { useState } from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ["chile", "matrix", "god of war"];

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [, setLocation] = useLocation();

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
      <ul>
        {POPULAR_GIFS.map((popularGifs) => (
          <li key={popularGifs}>
            <Link to={`/search/${popularGifs}`}>Gifs de {popularGifs}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
