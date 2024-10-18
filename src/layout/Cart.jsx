import clsx from 'clsx';
export default function Cart() {
  return (
    <section
      className={clsx('bg-white p-5 rounded-xl md:self-start md:flex-1')}>
      <h1 className="text-2xl text-red-600 font-bold">Your Cart (0)</h1>
    </section>
  );
}
