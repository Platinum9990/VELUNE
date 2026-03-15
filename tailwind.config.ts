import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#F4F0FF",
        soft: "#ECE6FF",
        lilac: "#B8A6FF",
        glow: "#DCD3FF",
        plum: "#4A3E6B",
        charcoal: "#1C1A22",
        muted: "#6E6A7E"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 25px 70px -45px rgba(74, 62, 107, 0.5)",
        card: "0 30px 90px -60px rgba(74, 62, 107, 0.6)"
      }
    }
  },
  plugins: []
};

export default config;
