/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        "color-first": "#122947",
        "color-second": "#B3BAC1",
        "color-third": "#9A9DA0",
        "color-footer": "#F4F1ED",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-hero": "url('/assets/images/bg-hero.png')",
        "bg-middle": "url('/assets/images/middle-bg.png')",
        "bg-vesna": "url('/assets/images/vesna.png')",
      },
    },
  },
  plugins: [],
};
