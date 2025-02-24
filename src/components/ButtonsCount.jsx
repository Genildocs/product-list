import React, { useEffect, useState } from 'react';
import { cn } from '../utils.js';
import { motion } from 'motion/react';
import IconCart from './svg/IconCart.jsx';
import IconIcrement from './svg/IconIncrement.jsx';
import IconDecrement from './svg/IconDecrement.jsx';
export default function ButtonsCount({ count, setCount }) {
  const [isVisible, setIsVisible] = useState(false);
  console.log(count);
  const filterCard = () => {
    setIsVisible(!isVisible);
  };

  const varianstButtons = {
    active: { y: 25, opacity: 1, transition: { duration: 0.5 } },
    inactive: { y: 50, opacity: 0 },
  };

  return (
    <>
      {/* Button Add cart */}
      <motion.button
        className={cn(
          'cursor-pointer w-40 flex items-center gap-2  px-5 py-3  rounded-[50px] absolute bottom-0  translate-x-[50%] border-[1px] border-solid ',
          isVisible && 'hidden'
        )}
        style={{
          backgroundColor: 'rgb(252,252,252)',
          borderColor: 'rgb(252, 249, 247)',
        }}
        variants={varianstButtons}
        initial="inactive"
        animate="active"
        whileHover={{ borderColor: 'rgb(199, 58, 15)' }}
        onClick={filterCard}>
        <IconCart />
        <span className="text-sm font-bold">Add to Cart</span>
      </motion.button>

      {/* Button Count */}
      <motion.button
        className={cn(
          'cursor-pointer bg-red-500 w-40 flex items-center justify-between gap-2  px-5 py-3  rounded-[50px] absolute bottom-0  translate-x-[50%] border-[1px] border-solid border-red-500',
          !isVisible && 'hidden'
        )}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 25, opacity: 1, transition: { duration: 0.5 } }}>
        <IconDecrement count={count} setCount={setCount} />
        <span className="text-white font-bold">{count}</span>
        <IconIcrement count={count} setCount={setCount} />
      </motion.button>
    </>
  );
}
