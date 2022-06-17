import React, { useEffect, useRef, useState } from "react";
function useDebounce(value: string, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  const handler = useRef(0);
  useEffect(() => {
    handler.current = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler.current);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;
