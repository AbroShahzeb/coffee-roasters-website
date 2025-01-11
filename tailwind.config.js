/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#FEFCF7",
        "dark-cyan": "#0E8784",
        "dark-grey-blue": "#333D4B",
        "pale-orange": "#FDD6BA",
        grey: "#83888F",
      },
    },
    fontFamily: {
      barlow: "Barlow",
      fraunces: "Fraunces",
    },
    fontSize: {
      "title-alternate-big": ["150px", { lineHeight: "72px" }],
      "heading-1": ["72px", { lineHeight: "72px" }],
      "heading-2": ["40px", { lineHeight: "48px" }],
      "heading-3": ["32px", { lineHeight: "36px" }],
      heading: ["24px", { lineHeight: "32px" }],
      body: ["16px", { lineHeight: "26px" }],
      "navigation-menu": [
        "12px",
        { lineHeight: "15px", letterSpacing: "0.92px" },
      ],
    },
  },
  plugins: [],
};
