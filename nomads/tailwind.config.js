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
        'bg': 'linear-gradient(90deg, #122636 14%, #1c202f 36%, rgba(20, 33, 55, 0.92) 52%, #182d42 83%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(13.5rem,1fr))",
        fluidSmall: "repeat(auto-fit, minmax(250px,1fr))",
        fluid1: "repeat(auto-fit, minmax(13rem,2fr))",
      },
      width: {
        '200': '291px',
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
