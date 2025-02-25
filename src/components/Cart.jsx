import React, { useEffect, useState } from 'react';

export default function Cart({ count, products }) {
  const [productsCart, setProductsCart] = useState({});
  const total = Object.values(count).reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    const filterProducts = products.reduce((acc, curr, index) => {
      if (count[index] > 0) {
        // Apenas adiciona se count > 0
        acc[index] = {
          name: curr.name,
          price: curr.price,
          count: count[index],
        };
      }
      return acc;
    }, {});
    setProductsCart(filterProducts);
  }, [count]);

  return (
    <section className="lg:w-[350px] ">
      <div className="bg-white p-5 rounded-lg shadow-(--shadow-cart)">
        <span className="font-bold text-2xl text-red-500">
          Your Cart({total})
        </span>
        <div>
          <div>
            <div>
              <p>Classic Tiramisu</p>
            </div>
            <div>
              <span>1x</span>
              <span>@ $5.50</span>
              <span>$5.50</span>
            </div>
          </div>
          <div>
            <button>X</button>
          </div>
        </div>
        <div>
          <span>Order Total</span>
          <span>$46.50</span>
        </div>
        <div>
          <p>This is a carbon-neutral delivery</p>
        </div>
        <div>
          <button>Confirm Order</button>
        </div>
      </div>
    </section>
  );
}
