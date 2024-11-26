import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        display: 'fantasy'
      },
      colors: {
        'primary-light': '#DBE4E9',
        'primary-dark': '#2C3233',
        'secondary': '#278291',
        'warn': '#F42F67',
        'monthly-stats-personal-label': '#fffcc4',
        'monthly-stats-acadedmic-label': '#a0e4e4',
        'monthly-stats-others-label': '#98bcfc',
        'monthly-stats-work-label': '#d0b4fc',
        'completed': '#9BE3E1',
        'unfinished': '#FF94B3',
        'unfinished-header': '#DC567C'
      }
    },
  },
  plugins: [],
};
export default config;
