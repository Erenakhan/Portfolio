module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#de77af",
        secondary: "#DBE2EF",
        third: "#3F72AF",
        forth: "#112D4E"
      },
        dropShadow: {
          sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          xl: '0 360px 450px -90px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },

      backgroundImage: {
        'gradient': 'linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)'
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      }
    },
  },
  variants: {},
  plugins: [],
};
