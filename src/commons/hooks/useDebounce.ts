import { useEffect, useState } from 'react';

type useDebounceProps = {
  value: string;
  delay: number;
};

const useDebounce = ({ value, delay }: useDebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};

export default useDebounce;
