import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { cn } from '../utils';
import CartProductFilter from './CartProductFilter';
import IconConfirmed from '../../public/images/icon-order-confirmed.svg';
import { CountProductContext } from '../CountProductContext';
Modal.setAppElement('#root'); // Evita problemas de acessibilidade
export default function ModalOrderConfirmed({ closeModal, modalIsOpen }) {
  const { count, setCount, updateCount } = useContext(CountProductContext);

  const update = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={cn(
        'lg:w-[600px] lg:h-[685px] mx-auto p-10 bg-white shadow-(--shadow-cart) rounded-lg mt-20 opacity-100 translate-z-0'
      )}
      overlayClassName="fixed inset-0 bg-black ">
      <img src={IconConfirmed} alt="icon confirmed" />
      <h2 className="text-4xl font-bold">Order Confirmed</h2>
      <p className="text-lg">We hope you enjoy your food!</p>
      <div className="my-3 p-5 bg-rose-50">
        <CartProductFilter modalIsOpen={modalIsOpen} />
      </div>
      <button
        className={cn(
          'cursor-pointer bg-red-500 text-white font-bold py-2 w-full rounded-[50px]'
        )}
        onClick={update}>
        Start New Order
      </button>
    </Modal>
  );
}
