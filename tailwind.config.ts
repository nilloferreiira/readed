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
        lightBlue: '#1d2e44',
        fontWhite: "#E1D2E3",
        startRating: "#FFD700",
        customRed: "#C12A2A"
      },

      blur: {
        full: "350px",
      },

      keyframes: {
        slideDown: {
          "0%": {transform : "translateY(-10px)"},
          "100%": {transform : "translateY(0px)"},  
        },

        contentShow: {
          '0%': {
            opacity: "0",
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          '100%': {
            opacity: "1",
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },

        fadeIn: {
          "0%": {opacity: "0"},
          "100%": {opacity: "1"}
        }
      },
      animation: {
        "slide-down":"slideDown 0.3s ease-in-out",
        "fade-in":"fadeIn 0.3s ease-in-out",
        "content-show":"contentShow 0.15s ease-in-out"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
export default config;