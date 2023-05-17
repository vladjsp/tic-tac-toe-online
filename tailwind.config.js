/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'game-field': 'repeat(3, 30px)',
      },
      gridTemplateRows: {
        'game-field': 'repeat(3, 30px)',
      },
    },
  },
  plugins: [],
};
