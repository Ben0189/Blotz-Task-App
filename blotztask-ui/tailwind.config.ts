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
        display: 'fantasy',
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
        'unfinished-header': '#DC567C',
        'add-task-title-bg': '#278291',
        'add-task-title-text': '#FFFFFF',
        'add-task-title-placeholder': '#FFFFFF',
        'add-task-work-label-bg': '#CDB2FF',
        'add-task-work-label-text': '#6021D6',
        'add-task-personal-label-bg': '#FBFAC2',
        'add-task-personal-label-text': '#7E7C1D',
        'add-task-academic-label-bg': '#278291',
        'add-task-academic-label-text': '#FFFFFF',
        'add-task-others-label-bg': '#94BDFF',
        'add-task-others-label-text': '#1458C6',
        'add-task-work-input-area-bg': '#E8E1F5',
        'add-task-personal-input-area-bg': '#F4F4E3',
        'add-task-academic-input-area-bg': '#9BE3E1',
        'add-task-others-input-area-bg': '#D2E3FF',
      },
    },
  },
  plugins: [],
};
export default config;
