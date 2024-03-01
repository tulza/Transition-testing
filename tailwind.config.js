/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        "red-bg": "var(--red-bg)",
        "green-bg": "var(--green-bg)",
        "blue-bg": "var(--blue-bg)",
      },
      screens: {},
      transitionProperty: {},
    },
  },
  plugins: [],
};
