import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',   // Custom extra small screen size
        'sm': '768px',   // Custom small screen size
        'md': '992px',   // Custom medium screen size
        'lg': '1256px',  // Custom large screen size
      },
      fontFamily: {
        'ttcommons': ['TTCommons', 'sans-serif'],
      },
      colors: {
        CustomWhite: '#EEEDEB',
        CustomGreen: '#747264',
        CustomBlack: '#000',
        CustomHover: '#ACACAB',
        CustomPurple: '#ACACAB',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
