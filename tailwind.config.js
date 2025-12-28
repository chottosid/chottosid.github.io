/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fefcff",
          100: "#faf8fc",
          200: "#f5f3f8",
          300: "#f0eef4",
          400: "#e8e5ed",
          500: "#ddd9e2",
          600: "#c4bfc9",
          700: "#a69fa8",
          800: "#837c85",
          900: "#6b646d",
        },
        academic: {
          primary: "#6366f1",
          secondary: "#8b5cf6",
          accent: "#a855f7",
          text: "#2d3748",
          "text-light": "#718096",
        },
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
