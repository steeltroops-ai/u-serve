
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        // South African Heritage Theme Premium colors
        saHeritage: {
          green: "hsl(var(--sa-green))",
          gold: "hsl(var(--sa-gold))",
          red: "hsl(var(--sa-red))",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "scale-up": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 15px 2px rgba(255, 184, 28, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 25px 5px rgba(255, 184, 28, 0.7)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-up": "scale-up 0.4s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      boxShadow: {
        'premium': '0 10px 30px -5px rgba(0, 0, 0, 0.2), 0 8px 15px -8px rgba(0, 0, 0, 0.2)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'gold': '0 8px 20px -4px rgba(255, 184, 28, 0.5)',
        'dark': '0 8px 20px -4px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, hsl(var(--sa-green)) 0%, hsl(var(--sa-green)/0.85) 100%)',
        'card-gradient': 'linear-gradient(135deg, hsl(var(--card)/0.9) 0%, hsl(var(--card)) 100%)',
        'sa-gradient': 'linear-gradient(135deg, hsl(var(--sa-green)) 0%, hsl(var(--sa-gold)/0.8) 100%)',
        'premium-gradient': 'linear-gradient(135deg, hsl(var(--sa-green)) 0%, hsl(var(--sa-green-dark)) 100%)',
        'gold-gradient': 'linear-gradient(135deg, hsl(var(--sa-gold)) 0%, hsl(var(--sa-gold-light)) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
