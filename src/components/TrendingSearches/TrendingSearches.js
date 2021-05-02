import { useEffect, useState } from "react";
import Category from "../Category/index";
import { getTrendingTerms } from "../../services/getTrendingTermsServices";

const TrendingSearches = () => {
  const [trens, setTrens] = useState([]);

  useEffect(() => {
    getTrendingTerms().then((res) => setTrens(res));
  }, []);

  return <Category name='Tendencias' options={trens} />;
};

export default TrendingSearches;
