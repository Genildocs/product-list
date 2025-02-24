import { useEffect, useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { cn } from '../utils.js';
import ButtonsCount from './ButtonsCount';
export default function SectionProducts({ children, count, setCount }) {
  const [product, setProduct] = useState([]);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const isMediumDevice = useMediaQuery(
    'only screen and (min-width : 769px) and (max-width : 992px)'
  );
  const isLargeDevice = useMediaQuery('only screen and (min-width : 993px) ');

  const getDeviceSize = () => {
    if (isSmallDevice) return 'mobile';
    if (isMediumDevice) return 'tablet';
    if (isLargeDevice) return 'desktop';
    return 'mobile';
  };

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      {children}
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-[repeat(3,minmax(0,13.5rem))] lg:grid-cols-[repeat(3,minmax(0,16rem))] gap-y-5 md:gap-5'
        )}>
        {product.map((product, index) => (
          <div key={index} className="flex flex-col gap-8">
            <div className="relative">
              <img
                src={`${product.image[getDeviceSize()].replace('./assets', '')}`}
                alt={product.name}
                className="rounded-lg w-full h-full object-contain"
              />
              <ButtonsCount
                count={count}
                setCount={setCount}
                product={product}
                index={index}
              />
            </div>
            <div>
              <p className="text-[14px] font-normal text-rose-500">
                {product.category}
              </p>
              <p className="font-semibold text-[1rem]">{product.name}</p>
              <p className="text-red-600 font-semibold text-[1rem]">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
