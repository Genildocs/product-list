import { useEffect } from 'react';

export default function IconIncrement({ setCount, index }) {
  return (
    <div
      className="border-[1px] border-solid border-white rounded-full p-1"
      onClick={() =>
        setCount((prevCount) => {
          return { ...prevCount, [index]: prevCount[index] + 1 };
        })
      }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="none"
        viewBox="0 0 10 10">
        <path
          fill="#fff"
          d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
        />
      </svg>
    </div>
  );
}
