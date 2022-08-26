/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        primary: "var(--border-radius-primary)",
        secondary: "var(--border-radius-secondary)",
      },
      fontFamily: {
        // Add your custom fonts and enjoy.
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        rubik: ["'Rubik'", "sans-serif"],
      },
      colors: {
        pv_primary: "var(--color-primary-main)",
        pv_bg: "var(--color-bg)",
        pv_dark: "var(--color-primary-dark)",
        error: "var(--color-error)",
        warn: "var(--color-warn)",
        label: "var(--color-label)",
        text: "var(--color-text)",
        input: "var(--color-input)",
        border: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
