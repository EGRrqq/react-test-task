import { useEffect } from "react";

const useHorizontalScroll = (ref, mediaQuery) => {
  useEffect(() => {
    const handleScroll = (e) => {
      if (!e.ctrlKey) {
        e.preventDefault();
        ref.current.scrollLeft += e.deltaY;
      }
    };

    const mql = window.matchMedia(mediaQuery);
    const checkMatchMedia = (mql) => {
      const element = ref.current;
      if (mql.matches) {
        element.addEventListener("wheel", handleScroll);
      } else {
        element.removeEventListener("wheel", handleScroll);
      }
    };

    mql.addEventListener("change", checkMatchMedia);
    checkMatchMedia(mql);

    return () => {
      mql.removeEventListener("change", checkMatchMedia);
    };
  }, [ref, mediaQuery]);
};

export default useHorizontalScroll;
