/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        never: {
          "0%": {
            transform: "translateX(-25%)"
          },
          "100%": {
            transform: "translateX(25%)"
          }
        }
      },
      animation: {
        never: "never 5s linear infinite"
      }
    }
  },
  plugins: [],
};
