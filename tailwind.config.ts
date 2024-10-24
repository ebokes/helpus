import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient1: "linear-gradient(108.9deg, #614BC3 7.52%, #03A7B4 113.36%)",
        // heroBg: "url('/charity website hero section BG image.jpg')",
        sectionBg: "url('/section background.png')",
      },
      fontFamily: {},
      colors: {
        white1: "#fff",
        black1: "#000000",
        primary: "#61CE70",
        primary2: "#F4FAF0",
        secondary: "#fff",
        grey: "#F8F9FA",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
