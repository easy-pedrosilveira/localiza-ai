import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "button-shadow":
          "inset 0px -4px 0px 0px #072AC8, inset 0px 4px 0px 0px #6998EFCC",
      },
      colors: {
        black: {
          "161616": "#161616",
          "33303E": "#33303E",
        },
        gray: {
          "5B5A62": "#5B5A62",
          "495263": "#495263",
        },
        blue: {
          "0160F7": "#0160F7",
        },
      },
    },
  },
  plugins: [],
};
export default config;
