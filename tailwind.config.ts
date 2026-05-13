import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",
        secondary: "#13294B",
        accent: "#22A652",
        "accent-dark": "#1B8C44",
        light: "#F3F4F6",
        border: "#E5E7EB"
      },
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  plugins: []
};

export default config;
