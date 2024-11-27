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
        primary: {
            DEFAULT: "var(--primary)",
            dark: "var(--primary-dark)"
        },
        secondary: 'var(--secondary)',
        warn: 'var(--warn)',
        "monthly-stats-personal-label": {
            DEFAULT: 'var(--monthly-stats-personal-personal-label)',
            text: 'var(--monthly-stats-personal-personal-text)',
        },
        "monthly-stats-work-label": {
            DEFAULT: 'var(--monthly-stats-work-label)',
            text: 'var(--monthly-stats-work-text)',
        },
        "monthly-stats-acadedmic-label": {
            DEFAULT: 'var(--monthly-stats-acadedmic-label)',
            text: 'var(--monthly-stats-acadedmic-text)',
        },
        "monthly-stats-others-label": {
            DEFAULT: 'var(--monthly-stats-others-label)',
            text: 'var(--monthly-stats-others-text)',
        },
        "unfinished": {
            DEFAULT: 'var(--unfinished)',
            header: 'var(--unfinished-header)',
        },
        completed: 'var(--completed)',
      }
    },
  },
  plugins: [],
};
export default config;
