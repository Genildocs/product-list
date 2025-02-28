import { useContext } from 'react';
import { CountProductContext } from '../../CountProductContext';
export default function IconDecrement({ index }) {
  const { updateCount } = useContext(CountProductContext);
  return (
    <div
      className="border-[1px] border-solid border-white rounded-full p-1 h-[20px] flex items-center justify-center"
      onClick={() => updateCount(index, -1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="2"
        fill="none"
        viewBox="0 0 10 2">
        <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
      </svg>
    </div>
  );
}
