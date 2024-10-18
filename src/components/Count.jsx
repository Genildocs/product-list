import { useState } from 'react';
import { useFetchJson } from '../hooks/useFetchJson';

export default function Count({ index, data }) {
  //   const { data: data } = useFetchJson('./data.json');
  const [count, setCount] = useState(Array(data.length).fill(0));

  const updateCount = (index, newCount) => {
    setCount((prevCounts) => {
      const updateCounts = [...prevCounts];
      updateCounts[index] = newCount;
      return updateCounts;
    });
  };

  const handleDecrement = () => {
    if (count[index] > 0) updateCount(index, count[index] - 1);
  };

  const handleIncrement = () => {
    updateCount(index, count[index] + 1);
  };

  return (
    <div className="flex gap-2">
      <button onClick={handleDecrement}>-</button>
      <div>{count[index]}</div>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
