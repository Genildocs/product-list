/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { display: ['Red Hat Text', 'sans-serif'] },
    extend: {
      gridTemplateColumns: {
        Desktop: 'repeat(3, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
};
