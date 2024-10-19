import { createContext, useState, useEffect } from 'react';
import { useFetchJson } from './useFetchJson';

const CountContext = createContext();

const CountProvider = ({ children }) => {
  const { data, error } = useFetchJson('./data.json');
  const [count, setCount] = useState([]);

  useEffect(() => {
    if (data) {
      setCount(Array(data.length).fill(0));
    }
  }, [data]);

  const updateCount = (index, newCount) => {
    setCount((prevCounts) => {
      const updateCounts = [...prevCounts];
      updateCounts[index] = newCount;
      return updateCounts;
    });
  };

  return (
    <CountContext.Provider
      value={{ count, setCount, data, error, updateCount }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
