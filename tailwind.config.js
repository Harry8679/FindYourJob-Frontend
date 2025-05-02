export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}', // pour que les classes soient reconnues partout
  ],
  theme: {
    extend: {
      fontFamily: {
        plusjakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
