module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  }
}
