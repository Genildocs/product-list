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
        count: 0,
      };

      return acc;
    }, {});
    setCount(initialData);
  }, []);

  // Função para atualizar a contagem sem permitir valores negativos
  const updateCount = (index, value) => {
    setCount((prevCount) => {
      const newCount =
        value === 0 ? 0 : Math.max((prevCount[index]?.count || 0) + value, 0);
      return {
        ...prevCount,
        [index]: { ...prevCount[index], count: newCount },
      };
    });
  };

  return (
    <CountProductContext.Provider value={{ count, setCount, updateCount }}>
      {children}
    </CountProductContext.Provider>
  );
};

export { CountProductContext, CountProductProvider };
