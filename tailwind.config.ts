import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '51': '51px'
      },
      width: {
        '1080': '1080px',
        '129': '129px'
      },
      colors: {
        'discordia-gray':'#B0BAC5',
        'discordia-light-gray': '#434956',
        'discordia-green': '#1BD96A',
        'discordia-black': '#111827'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
