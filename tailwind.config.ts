import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4F46E5",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#06B6D4",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Headings
        h1: ["68px", { lineHeight: "102px", letterSpacing: "0px", fontWeight: "700" }],
        h2: ["56px", { lineHeight: "84px", letterSpacing: "0px", fontWeight: "700" }],
        h3: ["46px", { lineHeight: "69px", letterSpacing: "0px", fontWeight: "700" }],
        h4: ["38px", { lineHeight: "57px", letterSpacing: "0px", fontWeight: "700" }],
        h5: ["32px", { lineHeight: "48px", letterSpacing: "0px", fontWeight: "700" }],
        h6: ["26px", { lineHeight: "39px", letterSpacing: "0px", fontWeight: "700" }],
        h7: ["22px", { lineHeight: "33px", letterSpacing: "0px", fontWeight: "700" }],
        // Body text
        b1: ["18px", { lineHeight: "27px", letterSpacing: "0px", fontWeight: "500" }],
        b2: ["16px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "500" }],
        b3: ["14px", { lineHeight: "21px", letterSpacing: "0px", fontWeight: "500" }],
        b4: ["12px", { lineHeight: "18px", letterSpacing: "0px", fontWeight: "500" }],
        b5: ["10px", { lineHeight: "15px", letterSpacing: "0px", fontWeight: "500" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;