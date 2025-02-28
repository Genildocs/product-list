import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils';
import Modal from 'react-modal';
import { CountProductContext } from '../CountProductContext.jsx';
import IconCarbon from '../../public/images/icon-carbon-neutral.svg';
import IconEmpentyCart from './svg/IconEmpentyCart';
import CartProductFilter from './CartProductFilter.jsx';
import ModalOrderConfirmed from './ModalOrderConfirmed.jsx';

export default function Cart() {
  const { count, setCount } = useContext(CountProductContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { totalCart, totalPrice } = Object.values(count).reduce(
    (acc, product) => {
      if (product.count > 0) {
        acc.totalCart += product.count;
        acc.totalPrice += product.price * product.count;
      }
      return acc;
    },
    { totalCart: 0, totalPrice: 0 }
  );

  // Abre o modal
  const openModal = () => setModalIsOpen(true);

  // Fecha o modal sem confirmar
  const closeModal = () => setModalIsOpen(false);

  return (
    <motion.section
      className="lg:w-[350px] mt-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }}
      viewport={{
        amount: 'some',
        once: true,
      }}>
      <div className="bg-white p-5 rounded-lg shadow-(--shadow-cart)">
        <span className="font-bold text-2xl text-red-500">
          Your Cart({totalCart})
        </span>
        <div className="py-3">
          <CartProductFilter />
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
              )}
              onClick={openModal}>
              Confirm Order
            </button>
            <ModalOrderConfirmed
              closeModal={closeModal}
              modalIsOpen={modalIsOpen}
            />
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
    </motion.section>
  );
}
