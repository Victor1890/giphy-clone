import { useEffect, useState } from "react";

export const useNearScreen = ({ elementRef, distance = "100px" } = {}) => {
  const [isNearScreen, setIsNearScreen] = useState(false);

  useEffect(() => {
    let observer;

    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== undefined
        ? IntersectionObserver
        : import("intersection-observer"),
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      observer.observe(elementRef.current);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen };
};
