import React, { Children, createContext, useEffect, useState } from 'react';
import data from '../public/data.json';

const CountProductContext = createContext();

const CountProductProvider = ({ children }) => {
  const [count, setCount] = useState({});

  useEffect(() => {
    const initialData = data.reduce((acc, item, index) => {
      acc[index] = {
        name: item.name,
        image: item.image,
        price: item.price,
        category: item.category,
        totalProductCart: count[index],
        count: 0,
      };

      return acc;
    }, {});
    setCount(initialData);
  }, []);

  console.log(count);

  return (
    <CountProductContext.Provider value={{ count, setCount }}>
      {children}
    </CountProductContext.Provider>
  );
};

export { CountProductContext, CountProductProvider };
