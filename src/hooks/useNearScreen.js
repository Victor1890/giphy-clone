import { useEffect, useState, useRef } from "react";

export const useNearScreen = ({ distance = "100px" } = {}) => {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const elementRef = useRef();

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

  return { isNearScreen, elementRef };
};
