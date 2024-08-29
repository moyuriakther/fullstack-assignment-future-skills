/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#000000',
        'custom-white': '#FFFFFF',
        'custom-gray': '#F3F4F6',
        'custom-footer-bg': '#1E1E1E',
        'custom-button-bg': '#2E2E2E',
      },
    },
  },
  plugins: [],
}

