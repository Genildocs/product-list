import React, { useState } from 'react';
import SectionProducts from './components/SectionProducts.jsx';
import Cart from './components/Cart.jsx';

export default function App() {
  const [count, setCount] = useState([]);

  return (
    <main className="p-6 md:p-10 lg:flex lg:px-28 lg:py-10 lg:gap-5 lg:w-[1440px] m-auto">
      <SectionProducts count={count} setCount={setCount}>
        <h1 className="text-black font-bold text-4xl mb-5">Desserts</h1>
      </SectionProducts>
      <Cart />
    </main>
  );
}
