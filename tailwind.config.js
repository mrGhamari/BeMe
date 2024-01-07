/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "teal-50": "#f0fdfa",
      "teal-100": "#ccfbf1",
      "teal-200": "#a7f3d0",
      "teal-300": "#5eead4",
      "teal-400": "#2dd4bf",
      "teal-500": "#14b8a6",
      "teal-600": "#0d9488",
      "teal-700": "#0f766e",
      "teal-800": "#115e59",
      "teal-900": "#134e4a",
      "teal-950": "#042f2e",
      "dark": "#000",
      "light-gray": "#f5f5f5",
      "white": "#fff",
      "light-blue": "#3A63A8",
      "dark-blue": "#191E29",
      "rgba":"rgba(228, 246, 228, 0.3)"
    },
  },
  plugins: [],
};
