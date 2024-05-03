/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          200: "#0a2fb6",
        },
        green: {
          100: "#54e28d",
        },
        gray: {
          100: "#8e8e8e",
          200: "#263a43",
        },
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
