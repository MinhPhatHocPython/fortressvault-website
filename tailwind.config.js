/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: { DEFAULT: '#0a0a0f', secondary: '#18181b', tertiary: '#1f1f23' },
        primary: { DEFAULT: '#2563eb', light: '#3b82f6', dark: '#1e3a8a' },
        accent: { DEFAULT: '#10b981', light: '#34d399', dark: '#059669' },
        text: { primary: '#f1f5f9', secondary: '#94a3b8' },
        border: { DEFAULT: '#27272a', light: '#3f3f46' },
      },
      fontFamily: { sans: ['Inter', 'Segoe UI Variable', 'sans-serif'] },
    },
  },
  plugins: [],
}
