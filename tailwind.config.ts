import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          900: '#0a0a0c', // Deepest obsidian background
          800: '#121214',
          700: '#1a1a1d',
        },
        slate: {
          border: '#2a2a2e', // Subtle slate border
        },
        accent: {
          glow: '#00f0ff', // Fluid glowing tech accent (cyan/blue glow)
        }
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
