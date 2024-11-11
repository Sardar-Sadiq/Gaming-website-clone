/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 10s linear infinite',
        bounce: 'bounce 2s infinite',
        fadeIn: 'fadeIn 2s ease-in',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translateX(calc(var(--scroll-section-width) * -1))',
          },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-path-polygon-0-0-100-0-100-0-0-0": {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
        ".clip-path-polygon-0-0-100-100-100-100-0-100": {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
