/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-black': '#0A0A0F',
        'deep-purple': '#1A1A2E',
        'neon-pink': '#FF2E9F',
        'neon-blue': '#4F46E5',
        'cosmic-gray': '#2A2A3C'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cosmic': 'linear-gradient(to right, #FF2E9F, #4F46E5)'
      }
    },
  },
  plugins: [],
};