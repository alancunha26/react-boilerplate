import { useState, useEffect } from 'react';

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const { scrollX: x, scrollY: y } = window;
    const handleScroll = () => setScrollPosition({ x, y });
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}
