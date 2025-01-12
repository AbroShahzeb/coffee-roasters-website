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
      "heading-4": ["24px", { lineHeight: "32px" }],
      body: ["16px", { lineHeight: "26px" }],
      "navigation-menu": [
        "12px",
        { lineHeight: "15px", letterSpacing: "0.92px" },
      ],
    },
    backgroundImage: {
      "hero-mobile": 'url("./assets/home/mobile/image-hero-coffeepress.jpg")',
      "hero-tablet": 'url("./assets/home/tablet/image-hero-coffeepress.jpg")',
      "hero-desktop": 'url("./assets/home/desktop/image-hero-coffeepress.jpg")',
      "collection-heading-gradient":
        "linear-gradient(180deg, rgba(254, 252, 247, 0.00) 0%, #FEFCF7 100%)",
      "collection-heading-gradient-large":
        "linear-gradient(180deg, rgba(254, 252, 247, 0.5) 0%, #FEFCF7 100%)",
      "why-us": "linear-gradient(to bottom, #ff0 50%, transparent 50%)",
      "bg-steps": 'url("./assets/plan/desktop/bg-steps.png")',
      none: "none",
      "about-mobile": 'url("./assets/about/mobile/image-hero-whitecup.jpg")',
      "about-tablet": 'url("./assets/about/tablet/image-hero-whitecup.jpg")',
      "about-desktop": 'url("./assets/about/desktop/image-hero-whitecup.jpg")',
      "about-commitment-mobile":
        'url("./assets/about/mobile/image-commitment.jpg")',
      "about-commitment-tablet":
        'url("./assets/about/tablet/image-commitment.jpg")',
      "about-commitment-desktop":
        'url("./assets/about/desktop/image-commitment.jpg")',
      "quality-mobile": 'url("./assets/about/mobile/bg-quality.png")',
      "quality-mobile-cover": 'url("./assets/about/mobile/image-quality.jpg")',
      "quality-tablet": 'url("./assets/about/tablet/bg-quality.png")',
      "quality-tablet-cover": 'url("./assets/about/tablet/image-quality.jpg")',
      "quality-desktop": 'url("./assets/about/desktop/bg-quality.png")',
      "quality-desktop-cover":
        'url("./assets/about/desktop/image-quality.jpg")',
    },
  },
  plugins: [],
};
