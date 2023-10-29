import { useEffect, useState, useRef, RefObject } from 'react';

export function useOnScreen(ref: RefObject<HTMLElement[]>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState<string[]>([]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsOnScreen((prevIsOnScreen) => {
          if (entry.isIntersecting && !prevIsOnScreen.includes(entry.target.id)) {
            return [...prevIsOnScreen, entry.target.id];
          } else if (!entry.isIntersecting) {
            return prevIsOnScreen.filter((id) => id !== entry.target.id);
          }
          return prevIsOnScreen;
        });
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // No dependencies here, because we only want to create the observer once

  useEffect(() => {
    if (ref.current) {
      ref.current.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.observe(el);
        }
      });
    }

    // Clean up the observer when the ref changes or component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [ref]);

  return isOnScreen;
}
