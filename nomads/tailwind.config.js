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
        'gradient-radial': 'linear-gradient(90deg, #122636 14%, #1c202f 36%, rgba(20, 33, 55, 0.92) 52%, #182d42 83%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
