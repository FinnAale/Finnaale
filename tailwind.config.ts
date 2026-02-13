import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        gold: '#FFD700',
        blueParty: '#00BFFF',
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
