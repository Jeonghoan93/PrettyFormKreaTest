import { useEffect, useState } from "react";

export const useWindowWidth = (defaultWidth: number = 1200) => {
  const isClient = typeof window === "object";
  const initialWidth = isClient ? window.innerWidth : defaultWidth;
  const [windowWidth, setWindowWidth] = useState(initialWidth);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  return windowWidth;
};
