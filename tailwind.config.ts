import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#7C3AED',
          hover: '#6D28D9',
          light: '#EDE9FE',
        },
        border: '#E5E7EB',
        surface: '#F5F5F7',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        monumental: ['var(--font-syne)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
