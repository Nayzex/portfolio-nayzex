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
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        ink: {
          DEFAULT: "var(--color-ink)",
          subtle: "var(--color-ink-subtle)",
        },
        stroke: "var(--color-stroke)",
              accent: {
                a: {
                  DEFAULT: "var(--color-accent-a-base)",
                  base: "var(--color-accent-a-base)",
                  hover: "var(--color-accent-a-hover)",
                  subtle: "var(--color-accent-a-subtle)",
                },
                b: {
                  DEFAULT: "var(--color-accent-b-base)",
                  base: "var(--color-accent-b-base)",
                  hover: "var(--color-accent-b-hover)",
                  subtle: "var(--color-accent-b-subtle)",
                },
              },
        // Couleurs additionnelles pour variété
        purple: {
          500: "#8B5CF6",
          600: "#7C3AED",
        },
        emerald: {
          500: "#10B981",
          600: "#059669",
        },
        cyan: {
          500: "#06B6D4",
          600: "#0891B2",
        },
        // Couleur personnalisée pour les cartes
        'card-dark': "#343a40",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "clamp-hero-title": "var(--font-size-h1)",
        "lead": "var(--font-size-lead)",
        "body": "var(--font-size-body)",
      },
      lineHeight: {
        tight: "var(--line-height-tight)",
        normal: "var(--line-height-normal)",
        relaxed: "var(--line-height-relaxed)",
      },
      spacing: {
        "0": "var(--space-0)",
        "1": "var(--space-1)",
        "2": "var(--space-2)",
        "3": "var(--space-3)",
        "4": "var(--space-4)",
        "5": "var(--space-5)",
        "6": "var(--space-6)",
        "7": "var(--space-7)",
        "8": "var(--space-8)",
        "9": "var(--space-9)",
        "10": "var(--space-10)",
        "12": "var(--space-12)",
        "16": "var(--space-16)",
        "20": "var(--space-20)",
        "24": "var(--space-24)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow-md)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        normal: "var(--transition-normal)",
        slow: "var(--transition-slow)",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
