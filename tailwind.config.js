/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   "2xl": { max: "1540px" },
    //   // => @media (max-width: 1535px) { ... }

    //   xl: { max: "1220px" },
    //   // => @media (max-width: 1279px) { ... }

    //   lg: { max: "1024px" },
    //   // => @media (max-width: 1023px) { ... }

    //   md: { max: "768px" },
    //   // => @media (max-width: 767px) { ... }

    //   sm: { max: "640px" },
    //   // => @media (max-width: 639px) { ... }
    // },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
