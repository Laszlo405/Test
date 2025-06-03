/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: 'var(--brand-indigo)',
          pink: 'var(--brand-pink)',
        },
      },
    },
  },
  plugins: [],
}
