import { lazy, Suspense } from "react";
import { useNearScreen } from "hooks/useNearScreen";
import Spinner from "components/Spinner";

const TrendingSearches = lazy(() => import("./TrendingSearches"));

const LazyTrending = () => {
  const { isNearScreen, elementRef } = useNearScreen();

  return (
    <Suspense fallback={<Spinner />}>
      <section ref={elementRef}>{isNearScreen && <TrendingSearches />}</section>
    </Suspense>
  );
};

export default LazyTrending;
