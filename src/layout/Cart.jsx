import clsx from 'clsx';
import { useContext } from 'react';
import { CountContext } from '../hooks/CountContext';
import Cookie from '../../public/assets/images/illustration-empty-cart.svg';
import ItemsCart from '../components/ItemsCart';
export default function Cart() {
  const { count } = useContext(CountContext);
  const totalCount = count.reduce((a, b) => a + b, 0);

  return (
    <section
      className={clsx('bg-white p-5 rounded-xl md:self-start md:flex-1')}>
      <h1 className="text-2xl text-red-600 font-bold">
        Your Cart ({totalCount})
      </h1>
      {totalCount > 0 ? (
        <div>
          <ItemsCart />
          <p className="text-center mb-5">
            This is a <span className="font-bold"> carbon-neutral </span>{' '}
            delivery
          </p>
          <button className="w-full bg-red-500 rounded-2xl text-white py-2">
            Confirm Order
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img src={Cookie} className="w-1/2" />
          <p>Your added items will appear here</p>
        </div>
      )}
    </section>
  );
}
