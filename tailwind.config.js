/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1a1b26',
        'sidebar': '#14151f',
        'sidebar-hover': '#1f2133',
        'text-default': '#e5e9f0',
        'accent-bright-blue': '#7aa2f7',
        'accent-soft-purple': '#bb9af7',
        'accent-mint-green': '#9ece6a',
      }
    },
  },
  plugins: [],
}
