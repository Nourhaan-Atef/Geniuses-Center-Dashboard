/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      text: "#0a0d10",
      background: "#f5f8f9",
      primary: "#7EB59A",
      secondary: "#dfe7ec",
      accent: "#a0c0c0",
    },
  },
  plugins: [],
};
