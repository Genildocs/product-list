import Count from '../components/Count';
import { useFetchJson } from '../hooks/useFetchJson';
import clsx from 'clsx';

export default function Cards() {
  const { data: data, error } = useFetchJson('../data.json');

  return (
    <div>
      <div className={clsx(error && '!block', 'hidden')}>
        Not found, Error 404
      </div>
      {data === null && (
        <div>
          <p>Carregando</p>
        </div>
      )}
      {
        <div className="md:flex-[3]">
          <h1 className="text-3xl font-bold mb-10">Desserts</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-Desktop md:gap-3 md:mt-5 ">
            {data !== null &&
              data.map((el, index) => (
                <div key={el.name}>
                  <div>
                    <img src={el.image.mobile} alt={el.name} />
                  </div>
                  <div>
                    <Count index={index} data={data} />
                  </div>
                  <div>
                    <p>{el.category}</p>
                    <p>{el.name}</p>
                    <p>${el.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      }
    </div>
  );
}
