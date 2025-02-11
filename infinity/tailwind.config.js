/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlightFade 2s ease-in-out infinite",
        "flip-top": "flip-top 0.6s ease-in",
        "flip-bottom": "flip-bottom 0.6s ease-in",
      },
      keyframes: {
        spotlightFade: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
        "flip-top": {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-180deg)" },
        },
        "flip-bottom": {
          "0%": { transform: "rotateX(180deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
