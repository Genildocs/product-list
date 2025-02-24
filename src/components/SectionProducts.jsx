import data from '../data.json';
import teste from '../assets/images/image-panna-cotta-thumbnail.jpg';
export default function SectionProducts({ children }) {
  return (
    <section className="p-6 md:p-10 lg:p-28">
      {children}
      <div className=" grid grid-cols-1 md:grid-cols-[repeat(3,minmax(0,13.5rem))] gap-y-5 md:gap-5">
        {data.map((product, index) => (
          <div key={index} className="flex flex-col gap-5">
            <div>
              <img
                src={`src/${product.image.mobile}`}
                alt={product.name}
                className="rounded-lg"
              />
            </div>
            <div>
              <p>{product.category}</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
