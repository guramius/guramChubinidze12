/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        'screen-720': 'min(100vh, 720px)', 
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.h-screen-dynamic': {
          height: 'min(100vh, 720px)',
        },
      });
    },

  ],
}

