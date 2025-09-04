/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        card: '#111827',
        primary: '#E11D48',
        secondary: '#7C3AED',
        accent: '#22D3EE',
        text: '#E5E7EB',
        muted: '#94A3B8',
      },
      fontFamily: {
        'heading': ['Bebas Neue', 'Impact', 'Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(34, 211, 238, 0.3)',
        'neon-primary': '0 0 20px rgba(225, 29, 72, 0.3)',
        'neon-secondary': '0 0 20px rgba(124, 58, 237, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
