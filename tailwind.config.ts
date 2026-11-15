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
        parchment: {
          50: "#FDFCF9",
          100: "#FAF7F0",
          200: "#F4EFE2",
          300: "#EBE3D0",
          400: "#DFD4BD",
          500: "#D1C2A5",
          default: "#FAF7F2",
        },
        ink: {
          900: "#171615",
          800: "#242220",
          700: "#383533",
          600: "#524F4B",
          500: "#706B66",
          400: "#99938D",
          300: "#C4BEB7",
        },
        burgundy: {
          50: "#FAF0F2",
          100: "#F4DFE4",
          200: "#E7BEC9",
          300: "#D394A5",
          400: "#B85C74",
          500: "#942B48",
          600: "#7E1F39",
          700: "#6B1D2F", // primary accent
          800: "#521624",
          900: "#3B0E19",
          DEFAULT: "#6B1D2F",
        },
        gold: {
          50: "#FAF7EE",
          100: "#F4ECCF",
          200: "#E9D8A0",
          300: "#DEC272",
          400: "#D2AB47",
          500: "#C5A059", // primary accent
          600: "#A88339",
          700: "#866627",
          800: "#664D1F",
          DEFAULT: "#C5A059",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "EB Garamond", "Georgia", "serif"],
        heading: ["var(--font-heading)", "Cinzel", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Outfit", "system-ui", "-apple-system", "sans-serif"],
        editorial: ["var(--font-editorial)", "EB Garamond", "Georgia", "serif"],
        arabic: ["var(--font-arabic)", "Amiri", "Scheherazade New", "serif"],
        ruqaa: ["var(--font-ruqaa)", "Aref Ruqaa", "Amiri", "serif"],
      },
      boxShadow: {
        manuscript: "0 2px 12px -2px rgba(36, 34, 32, 0.06), 0 1px 3px rgba(36, 34, 32, 0.04)",
        "manuscript-lg": "0 10px 25px -3px rgba(36, 34, 32, 0.08), 0 4px 6px -2px rgba(36, 34, 32, 0.03)",
        "manuscript-card": "0 0 0 1px rgba(107, 29, 47, 0.06), 0 3px 10px rgba(0, 0, 0, 0.03)",
      },
      backgroundImage: {
        'paper-grain': "radial-gradient(#d6cebe 0.75px, transparent 0.75px)",
      }
    },
  },
  plugins: [],
};
export default config;
