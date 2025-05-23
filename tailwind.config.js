/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "768px",
        medium: "1280px",
        laptop: "1440px",
        desktop: "1920px",
      },
    },
  },
  plugins: [],
};
