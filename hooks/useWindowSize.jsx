import { useEffect, useState } from "react";

const useWindowSize = () => {
  const isClient = typeof window === "object"; // Check if window is defined

  const [size, setSize] = useState(
    isClient ? [window.innerWidth, window.innerHeight] : [0, 0]
  );

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [isClient]);

  return size;
};

export default useWindowSize;
