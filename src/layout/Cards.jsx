import clsx from 'clsx';
import { useContext } from 'react';
import { CountContext } from '../hooks/CountContext';
export default function Cards() {
  const { count, data, error, updateCount } = useContext(CountContext);

  const handleDecrement = (index) => {
    if (count[index] > 0) updateCount(index, count[index] - 1);
  };

  const handleIncrement = (index) => {
    updateCount(index, count[index] + 1);
  };
  return (
    <div className="md:flex-[3]">
      <div className={clsx(error && '!block', 'hidden')}>
        Not found, Error 404
      </div>
      {
        <div>
          <h1 className="text-3xl font-bold mb-10">Desserts</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-Desktop md:gap-3 md:mt-5 ">
            {data !== null &&
              data.map((el, index) => (
                <div key={el.name}>
                  <div className={clsx('md:hidden')}>
                    <img
                      src={el.image.mobile}
                      alt={el.name}
                      className="object-cover rounded-md cursor-pointer"
                      onClick={() => handleIncrement(index)}
                    />
                  </div>
                  <div className={clsx('hidden md:block')}>
                    <img
                      src={el.image.desktop}
                      alt={el.name}
                      className="object-cover rounded-md cursor-pointer"
                      onClick={() => handleIncrement(index)}
                    />
                  </div>
                  <div>
                    <button>Add Cart</button>
                    <button onClick={() => handleDecrement(index)}>-</button>
                    {count[index]}
                    <button onClick={() => handleIncrement(index)}>+</button>
                  </div>
                  <div>
                    <p>{el.category}</p>
                    <p className="font-semibold">{el.name}</p>
                    <p className="text-red-600 font-medium">${el.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      }
    </div>
  );
}
