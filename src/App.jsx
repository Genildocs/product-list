import React, { useEffect, useState } from 'react';
import SectionProducts from './components/SectionProducts.jsx';
import Cart from './components/Cart.jsx';
import data from '../public/data.json';
export default function App() {
  const [product, setProduct] = useState([]);
  // const [count, setCount] = useState(new Array(data.length).fill(0));
  const [count, setCount] = useState({});

  useEffect(() => {
    const initialCount = data.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {});

    setCount(initialCount);
    setProduct(data);
  }, []);

  return (
    <main className="p-6 md:p-10 lg:flex lg:px-28 lg:py-10 lg:gap-5 lg:w-[1440px] m-auto">
      <SectionProducts count={count} setCount={setCount} products={product}>
        <h1 className="text-black font-bold text-4xl mb-5">Desserts</h1>
      </SectionProducts>
      <Cart count={count} setCount={setCount} products={product} />
    </main>
  );
}
