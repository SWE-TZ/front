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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark" : "#1B262C",
        "light" : "#FBE4CC",
        sliderTrack: '#1B262C',
        sliderThumb: '#1B262C',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
