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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        screens: {
          "3xl": "1712px",
          "2xl": "1536px",
          xl: "1280px",
          lg: "1024px",
          md: "768px",
          sm: "640px",
          DEFAULT: "100%",
        },
      },
      fontFamily: {
        nunito: ["'Nunito Sans'", "sans-serif"],
        unbounded: ["'Unbounded'", "sans-serif"],
      },
      backgroundColor: {
        "btn-gray": "var(--bg-btn-gray)",
        primary: "var(--background)",
        footer: "var(--bg-footer)",
      },
      borderColor: {
        primary: "rgba(255, 255, 255, 0.30)",
      },
      textColor: {
        secondary: "rgba(255, 255, 255, 0.60)",
        lightsecondary: "rgba(255, 255, 255, 0.30)",
      },
      fontSize: {
        fz18: "18px",
        fz74: "74px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
export default config;
