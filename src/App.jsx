import React, { useEffect, useState } from 'react';
import SectionProducts from './components/SectionProducts.jsx';
import Cart from './components/Cart.jsx';
import { CountProductProvider } from './CountProductContext.jsx';
export default function App() {
  return (
    <CountProductProvider>
      <main className="p-6 md:p-10 lg:flex lg:px-28 lg:py-10 lg:gap-5 lg:w-[1440px] m-auto">
        <SectionProducts>
          <h1 className="text-rose-900 font-bold text-4xl mb-5">Desserts</h1>
        </SectionProducts>
        <Cart />
      </main>
    </CountProductProvider>
  );
}
