/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        primary: "var(--border-radius-primary)",
      },
      fontFamily: {
        // Add your custom fonts and enjoy.
        Mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        pv_primary: "var(--color-primary-main)",
        pv_bg: "var(--color-bg)",
        pv_dark: "var(--color-primary-dark)",
        label: "var(--color-label)",
        text: "var(--color-text)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
