module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Satoshi", "sans-serif"],
        heading: ["SatoshiBold", "sans-serif"],
        subheading: ["SatoshiMedium", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
