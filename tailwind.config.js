/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        17: '4.375rem',
        18: '4.5rem',
        21: '5.75rem',
        30: '7.5rem',
      },
    },
    colors: {
      primary: {
        DEFAULT: '#3F7CDB',
        300: '#5F92E1',
        200: '#9FBDED',
        100: '#D9E5F8',
      },
      secondary: {
        DEFAULT: '#0B1C56',
        500: '#141738',
        400: '#9CBBEE',
        300: '#444771',
        200: '#677189',
        150: '#8E90A9',
        100: '#D2D3DD',
      },
      lightBlue: '#ebf1fc',
      danger: {
        DEFAULT: '#F15D5F',
        300: '#F3787A',
      },
      body: '#686868',
      white: {
        DEFAULT: '#FFF',
        800: '#F3F8FF',
        700: '#F6F9FF',
        600: '#F5F9FF',
      },
      black: {
        DEFAULT: '#000',
        200: '#85858E',
      },
    },
    fontFamily: {
      sans: ['Atakk', 'sans-serif'],
    },
    fontSize: {
      xs: '0.625rem', // 10px

      sm: ['0.8125rem', '26px'], // 13px

      tiny: '0.875rem', // 14px

      base: ['1rem', '32px'], // 16px

      md: '1.125rem', // 18px

      '2md': ['1.25rem', '28px'], // 20px

      '3md': ['1.5rem', '28.8px'], // 24px h5

      lg: ['1.75rem', '40px'], // 28px h4

      '2lg': ['2rem', '44px'], // 32px h3

      xl: ['2.5rem', '56px'], // 40px h2

      '2xl': ['3.5rem', '72px'], // 56px h1
    },
  },
  plugins: [],
};
