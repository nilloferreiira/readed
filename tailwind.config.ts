import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-roboto)",
      },

      colors: {
        indigo: "#627CD9",
        bg: "#04011C",
        darkBlue: "#0D0D2D",
        fontWhite: "#E1D2E3",
      },

      blur: {
        full: "350px",
      },
    },
  },
  plugins: [],
};
export default config;
