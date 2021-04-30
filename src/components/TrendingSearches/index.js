import { useEffect, useState, useRef } from "react";
import Category from "../Category/index";
import { getTrendingTerms } from "../../services/getTrendingTermsServices";
import { useNearScreen } from "hooks/useNearScreen";

const TrendingSearches = () => {
  const [trens, setTrens] = useState([]);

  useEffect(() => {
    getTrendingTerms().then((res) => setTrens(res));
  }, []);

  return <Category name='Tendencias' options={trens} />;
};

const LazyTrending = () => {
  const elementRef = useRef();
  const { isNearScreen } = useNearScreen({ elementRef });

  return (
    <section ref={elementRef}>{isNearScreen && <TrendingSearches />}</section>
  );
};

export default LazyTrending;
