/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vscode-bg': '#0D1117',
        'vscode-panel': '#161B22',
        'vscode-card': '#1E293B',
        'vscode-border': '#30363D',
        'vscode-text': '#C9D1D9',
        'vscode-blue': '#58A6FF',
        'vscode-green': '#238636',
        'vscode-purple': '#BC8CFF',
        'vscode-yellow': '#D2A8FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
