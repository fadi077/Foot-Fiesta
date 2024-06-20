/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backdropFilter: { 'none': 'none', 'blur': 'blur(20px)' },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
    require('tailwindcss-filters'),
]
}

