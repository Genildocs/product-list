import { useContext } from 'react';
import { CountContext } from '../hooks/CountContext';

export default function ItemsCart() {
  const { count, data } = useContext(CountContext);

  const filterCount = data.filter((_, index) => count[index] > 0);

  return (
    <div>
      {filterCount.map((dish, idx) => (
        <div key={dish.name}>
          <div key={dish.name} className="flex justify-between my-5">
            <div>
              <p className="font-bold">{dish.name}</p>
              <div className="flex gap-5">
                <p className="text-red-600 font-bold">
                  {count[data.indexOf(dish)]}x
                </p>
                <p>@{dish.price}</p>
                <p>${dish.price * count[data.indexOf(dish)]}</p>
              </div>
            </div>

            <div className="border-2 rounded-full w-8 h-8 flex justify-center items-center">
              <button className="font-bold text-gray-300 hover:text-gray-600">
                X
              </button>
            </div>
          </div>
          <hr className="mb-5" />
        </div>
      ))}
      <div className="flex justify-between mb-5">
        <p>Order Total</p>
        <p className="font-bold text-lg">
          $
          {filterCount.reduce(
            (acc, cur) => acc + cur.price * count[data.indexOf(cur)],
            0
          )}
        </p>
      </div>
    </div>
  );
}
