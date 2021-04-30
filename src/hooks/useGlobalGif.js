import { useContext } from "react";
import GifsContext from "context/GifsContextProvider";

const useGlobalGif = () => {
  const { gifs } = useContext(GifsContext);
  return gifs;
};

export default useGlobalGif;
