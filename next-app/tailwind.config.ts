import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "chocolate-cosmos": "hsl(var(--chocolate-cosmos))",
        claret: "hsl(var(--claret))",
        "amaranth-purple": "hsl(var(--amaranth-purple))",
        "rose-red": "hsl(var(--rose-red))",
        "bright-pink": "hsl(var(--bright-pink))",
        "salmon-pink": "hsl(var(--salmon-pink))",
        "cherry-blossom": "hsl(var(--cherry-blossom))",
      },
      backgroundImage: {
        "gradient-romantic": "var(--gradient-romantic)",
      },
      boxShadow: {
        "romantic": "var(--shadow-romantic)",
      },
      keyframes: {
        "romantic-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(var(--bright-pink) / 0.4)" },
          "50%": { boxShadow: "0 0 0 12px hsl(var(--bright-pink) / 0.05)" },
        },
      },
      animation: {
        "romantic-glow": "romantic-glow 3s ease-in-out infinite",
      },
    },
  },
  darkMode: ["class"],
};

export default config;
