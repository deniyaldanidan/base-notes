import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c8792",
        secondary: "#D7CAD2",
        accent: "#CA6BAE",
        background: "#F3F6F9",
        secondaryBackground: "#d0dde7",
        tertiaryBackground: "#a7c0d2",
        lightBackground: "#eaeff4",
        foreground: "#131B23",
        secondaryForeground: "#2f485d",
        tertiaryForeground: "#406989",
        dimBorder: "#a5c0d4",
        danger: "#ef4444",
        warn: "#fdba74",
        success: "#86efac",
      },
      spacing: {
        "page-margin-x": "var(--page-margin-x)",
      },
      fontSize: {
        "logo-font": "var(--logo-font)",
        "menu-font": "var(--menu-font)",
        "btn-font": "var(--btn-font)",
        "section-title-font": "var(--section-title-font)",
        "section-subtitle-font": "var(--section-subtitle-font)",
        "input-font": "var(--input-font)",
      },
    },
  },
  plugins: [],
};
export default config;
