/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9c1',
          300: '#f6c097',
          400: '#f19d6b',
          500: '#ed7d47',
          600: '#de6332',
          700: '#b84d28',
          800: '#934027',
          900: '#763623',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fdf4f3',
          100: '#fce7e6',
          200: '#fbd4d2',
          300: '#f7b5b1',
          400: '#f18b85',
          500: '#e8645c',
          600: '#d4453a',
          700: '#b23530',
          800: '#942f2d',
          900: '#7c2d2e',
        }
      }
    },
  },
  plugins: [],
};
