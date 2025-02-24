import { useEffect, useState } from 'react';

export default function SectionProducts({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('../../data.json')
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="p-6 md:p-10 lg:p-28">
      {children}
      <div className=" grid grid-cols-1 md:grid-cols-[repeat(3,minmax(0,13.5rem))] gap-y-5 md:gap-5">
        {product.map((product, index) => (
          <div key={index} className="flex flex-col gap-5">
            <div>
              <img
                src={`src/${product.image.mobile}`}
                alt={product.name}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="text-[14px] font-normal text-rose-500">
                {product.category}
              </p>
              <p className="font-semibold text-[1rem]">{product.name}</p>
              <p className="text-red-600 font-semibold text-[1rem]">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
