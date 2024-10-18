import clsx from 'clsx';
import Cards from './layout/Cards';
import Cart from './layout/Cart';
export default function App() {
  return (
    <main className={clsx('flex flex-col md:flex-row gap-8 p-5 md:p-12')}>
      <Cards />
      <Cart />
    </main>
  );
}
