/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', 'src/**/*.{ts,tsx}'],
  theme: {
    debugScreens: { position: ['top', 'left'] },
    extend: {
      colors: {
        mainColor: '#212f49',
      },
      fontFamily: {
        headline: ['Oswald'],
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
