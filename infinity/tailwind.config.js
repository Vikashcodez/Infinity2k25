/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlightFade 2s ease-in-out infinite",
      },
      keyframes: {
        spotlightFade: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
