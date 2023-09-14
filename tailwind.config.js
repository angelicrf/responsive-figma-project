/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-page": "#f6f3f3",
        rpanelpgbg: "#cac0ca",
        centerpagebg: "#c0c4ca",
        black: "#000",
        leftculpagebg: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "5xl": "24px",
      "3xl": "22px",
      lg: "18px",
      mid: "17px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      "ipad-29": {
        raw: "screen and (min-width: 961px) and (max-width: 1120px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
