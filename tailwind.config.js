module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  variants: {
    extend: {
      backgroundColor: ['disabled', 'active'],
      textColor: ['disabled'],
    },
  },
}
