/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#08080C",
          surface: "#0D0E17",
          card: "#121422",
          cardHover: "#181A2D",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(255, 87, 34, 0.4)",
          orange: "#FF5722",
          orangeGlow: "#FF7A00",
          pink: "#FF007A",
          pinkGlow: "#FF2E93",
          cyan: "#00F0FF",
          purple: "#8A2BE2",
          violet: "#7928CA",
          muted: "#94A3B8"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-orange': '0 0 25px -3px rgba(255, 87, 34, 0.5), 0 0 10px -2px rgba(255, 87, 34, 0.3)',
        'neon-pink': '0 0 25px -3px rgba(255, 0, 122, 0.5), 0 0 10px -2px rgba(255, 0, 122, 0.3)',
        'neon-cyan': '0 0 25px -3px rgba(0, 240, 255, 0.5), 0 0 10px -2px rgba(0, 240, 255, 0.3)',
        'neon-purple': '0 0 25px -3px rgba(138, 43, 226, 0.5), 0 0 10px -2px rgba(138, 43, 226, 0.3)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.07)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-spin': 'glowSpin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
