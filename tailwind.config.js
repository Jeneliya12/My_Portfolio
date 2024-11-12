/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#f7edea",
          100: "#edd9d3",
          200: "#e0beb3",
          300: "#d3a393",
          400: "#c78472",
          500: "#ab5d4d", // base brown color
          600: "#8c493e",
          700: "#6e362f",
          800: "#4f231f",
          900: "#31110f",
        },
      },
      fontFamily: {
        times: ['"Times New Roman"', "Times", "serif"],
      },
      darkMode: "class",
    },
  },
  plugins: [],
};
