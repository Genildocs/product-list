import React from 'react';

export default function Cart({ count }) {
  return (
    <section className="lg:w-[350px] ">
      <div className="bg-white p-5 rounded-lg shadow-(--shadow-cart)">
        <span className="font-bold text-2xl text-red-500">
          Your Cart({count})
        </span>
      </div>
    </section>
  );
}
