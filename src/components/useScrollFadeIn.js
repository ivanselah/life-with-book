import { useCallback, useEffect, useRef } from "react";

const useScrollFadIn = () => {
  const dom = useRef();

  const ScrollMotion = useCallback((entries, observer) => {
    const { current } = dom;

    if (entries[0].isIntersecting) {
      current.style.transitionProperty = "opacity transform";
      current.style.transitionDuration = "1s";
      current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current.style.transitionDelay = "0s";
      current.style.opacity = 1;
      current.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  useEffect(() => {
    const target = dom.current;

    const options = {
      root: null,
      threshold: 0.5,
    };

    if (target) {
      const observer = new IntersectionObserver(ScrollMotion, options);
      observer.observe(target);

      return () => observer && observer.disconnect();
    }
  }, [ScrollMotion]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: "translate3d(0, 50%, 0)",
    },
  };
};

export default useScrollFadIn;
