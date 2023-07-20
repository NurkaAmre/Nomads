/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '200': '324px',
      },
      height: {
        '150': '500px',
      },
       fontFamily: {
        abril: ['var(--font-abril_fatface)'],
        abhaya: ['var(--font-abhaya_libre)'],
        aloe: ['var(--font-aloe)'],
        fjala: ['var(--font-fjala_one)'],
         merri: ['var(--font-merriweather_sans)'],
        poller: ['var(--font-poller_one)'],
      },
    },
  },
  plugins: [],
}
