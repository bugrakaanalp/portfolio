import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F7F5",
        surface: "#FFFFFF",
        border: "#E5E7EB",
        text: {
          primary: "#0F172A",
          secondary: "#475569",
        },
        accent: {
          DEFAULT: "#4F46E5",
          muted: "#6366F1",
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.06)",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
