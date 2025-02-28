import React, { useContext } from 'react';
import { cn } from '../utils';
import { motion } from 'motion/react';
import { CountProductContext } from '../CountProductContext';
import IconCartRemove from './svg/IconCartRemove';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartProductFilter({ modalIsOpen }) {
  const { count, updateCount } = useContext(CountProductContext);

  return (
    <>
      {Object.entries(count)
        .filter(([_, product]) => product.count > 0)
        .map(([index, product]) => (
          <div
            key={index}
            className="border-b-[1px] border-solid border-rose-50 ">
            <div className={cn('flex items-center justify-between mb-2')}>
              <div>
                {/* Disponivel quando o modal estiver aberto */}
                <div className={cn('hidden', modalIsOpen && 'block')}>
                  <img
                    src={`${product.image.thumbnail.replace('./assets', '')}`}
                    alt={product.name}
                  />
                  <div>
                    <p className="font-semibold text-sm">{product.name}</p>
                  </div>
                  <span className="text-red-500 font-bold text-[16px] ">
                    {product.count}x
                  </span>
                  <span>@ ${product.price}</span>
                </div>
                {/* Disponivel quando o modal estiver fechado */}
                <div className={cn(modalIsOpen && 'hidden')}>
                  <p className="font-semibold text-sm">{product.name}</p>
                </div>
                {/* Disponivel quando o modal estiver fechado */}
                <div
                  className={cn(
                    'flex items-center gap-2',
                    modalIsOpen && 'hidden'
                  )}>
                  <span className="text-red-500 font-bold text-[16px] ">
                    {product.count}x
                  </span>
                  <span>@ ${product.price}</span>
                  <span>${product.price * product.count}</span>
                </div>
              </div>
              <div>
                {/* Disponivel quando o modal estiver fechado */}
                <motion.button
                  className={cn(
                    'cursor-pointer border-[1px] border-solid  rounded-full p-1',
                    modalIsOpen && 'hidden'
                  )}
                  style={{ borderColor: 'rgb(173, 137, 133)' }}
                  whileHover={{ opacity: 0.8 }}
                  onClick={() => {
                    if (
                      window.confirm(
                        `Are you sure you want to remove ${product.name} from the cart?`
                      )
                    ) {
                      toast.info(`${product.name} removed from cart`, {
                        position: 'top-right',
                        autoClose: 3000, // Fecha automaticamente após 3 segundos
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'light',
                      });

                      // Aguarda um pequeno tempo antes de atualizar o estado
                      setTimeout(() => {
                        updateCount(index, 0);
                      }, 1000); // Delay de 500ms antes de remover o item
                    }
                  }}>
                  <IconCartRemove />
                </motion.button>
                <ToastContainer />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
