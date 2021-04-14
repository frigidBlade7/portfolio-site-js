module.exports = {
  theme: {
    extend: {
      colors: {
        yellow: 'FFD700',
        black: '#FFF',
        'oslo-gray': '#79838B',
        'black-pearl': '#1B1B1B',
        gray: '#B5BDC5',
        'dark-gray': '#7A7A7A',
        white: '#FFF',
        'green-10': '#23CB23',
        blue: '#71AAEA',
        peach: '#F97583',
        purple: '#B392F0',
        stone: '#32323',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        102: '36rem',
      },
      fontSize: {
        '10xl': '9rem',
      },
      lineHeight: {
        36: '9rem',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
}
