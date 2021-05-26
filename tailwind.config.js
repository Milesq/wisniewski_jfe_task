module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        danger: {
          DEFAULT: '#ff3860',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled', 'active'],
      textColor: ['disabled'],
    },
  },
}
