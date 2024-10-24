import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "744px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      colors: {
        secondary: { 500: "#F7F4ED" },
        gray: {
          50: "#F9F9F9",
          900: "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
