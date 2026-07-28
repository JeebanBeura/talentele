import { useState, useEffect } from "react";

export function useIntersectionObserver(elementRef, { threshold = 0, root = null, rootMargin = "0%" }) {
  const [entry, setEntry] = useState();

  useEffect(() => {
    const node = elementRef?.current;
    if (!node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, observerParams);

    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, JSON.stringify(threshold), root, rootMargin]);

  return entry;
}
