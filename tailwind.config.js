/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    fontFamily: {
      bounce: ['Sohne', 'Tahoma', 'Verdana', 'sans-serif'],
      default: ['Sohne', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        bounce: {
          100: '#F9F5F3',
          200: '#0a121b',
          300: '#E9351A',
          400: '#114232',
        },
        bounceGray: {
          100: '#acacac',
          200: '#707070',
        },
      },
    },
  },
  plugins: [],
};
