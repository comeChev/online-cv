import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function useElementOnScreen(
  options: IntersectionObserverInit,
  exit = false
) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      entry.isIntersecting && setVisible(true);
      exit && setVisible(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options, exit]);

  return [containerRef, visible];
}
