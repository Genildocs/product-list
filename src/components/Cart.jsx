import React, { useEffect, useState } from 'react';
import IconCarbon from '../../public/images/icon-carbon-neutral.svg';
import { cn } from '../utils';
import IconEmpentyCart from './svg/IconEmpentyCart';
import IconCartRemove from './svg/IconCartRemove.jsx';
export default function Cart({ count, setCount, products }) {
  const [productsCart, setProductsCart] = useState({});
  const totalCart = Object.values(count).reduce((acc, curr) => acc + curr, 0);

  const totalPrice = Object.values(productsCart).reduce((acc, curr) => {
    return acc + curr.price * curr.count;
  }, 0);

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

  const updateCart = (index) => {
    setCount((prevCount) => {
      const updatedCount = { ...prevCount };
      updatedCount[index] = 0;
      return updatedCount;
    });
  };

  return (
    <section className="lg:w-[350px] mt-5">
      <div className="bg-white p-5 rounded-lg shadow-(--shadow-cart)">
        <span className="font-bold text-2xl text-red-500">
          Your Cart({totalCart})
        </span>
        <div className="py-3">
          {Object.entries(productsCart).map(([index, product]) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <div>
                  <div>
                    <p className="font-semibold text-sm">{product.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-bold text-[16px] ">
                      {product.count}x
                    </span>
                    <span>@ ${product.price}</span>
                    <span>${product.price * product.count}</span>
                  </div>
                </div>
                <div>
                  <button
                    className="cursor-pointer"
                    onClick={() => updateCart(index)}>
                    <IconCartRemove />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={cn('hidden', totalCart > 0 && 'block')}>
          <div className="flex items-center justify-between mb-3">
            <span>Order Total</span>
            <span className="font-bold">${totalPrice}</span>
          </div>
          <div className="bg-rose-50 p-2 flex items-center justify-center gap-2 rounded-lg mb-3">
            <img src={IconCarbon} alt="icon" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <div>
            <button
              className={cn(
                'cursor-pointer bg-red-500 text-white font-bold py-2 w-full rounded-[50px]'
              )}>
              Confirm Order
            </button>
          </div>
        </div>
        <div
          className={cn(
            'flex flex-col items-center justify-center py-3',
            totalCart > 0 && 'hidden'
          )}>
          <IconEmpentyCart />
          <p className="text-rose-500 font-bold">
            Your added items will appear here
          </p>
        </div>
      </div>
    </section>
  );
}
