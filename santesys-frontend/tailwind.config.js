module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInSpot: 'fadeInSpot 0.2s linear forwards',
        fadeInUp: 'fadeInUp 0.4s ease-in-out forwards',
        typing: 'typing 3s steps(40, end) forwards',
        blink: 'blink 0.5s step-end infinite',
        'animated-text': 'animated-text 4s steps(29, end) 1s 1 normal both',
        'animated-cursor': 'animated-cursor 600ms steps(29, end) infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        fadeInSpot: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'animated-text': {
          // 1:{
            from: { width: '0' },
            to: { width: '572px' },
          // },
          // 2:{
          //   from: { width: '0' },
          //   to: { width: '572px' },
          // },
          // 3:{
          //   from: { width: '0' },
          //   to: { width: '572px' },
          // },
        },
        'animated-cursor': {
          from: { borderRightColor: 'rgba(0,255,0,0.75)' },
          to: { borderRightColor: 'transparent' },
        },
      },
      colors: {
        onyx: '#0C1210',
        mushroom: {
          50: '#f5f4f2',
          500: '#c2a174',
        },
        quartz: {
          500: '#D18EE2', // Replace with your desired color value
        },
        volcanic: {
          900: '#212121',
          800:'#424242'
        },
        marble:{
          100: '#f5f5f5',
          200: '#F3EDE8',
          300: '#eeeeee',
          400: '#e0e0e0',
          500: '#bdbdbd'
        },
        coral:{
          500: '#ff7759',
          700: '#BDBDBD'
        }
      },
      height: {
        'cell-md': '200px', // Define 'cell-md' height
        'cell-xs': '1.5rem', // Define 'cell-md' height
      },
      borderRadius: {
        'l-[6px]': '6px',
        'tr-[10px]': '10px',
        'br-[4px]': '4px',
        'md': '0.375rem',
      },
      width: {
        'btn-md': '120px', // Adjust based on button width requirement
      },
      minHeight: {
        'cell-md': '40px', // Minimum height of the cell component
        'cell-xs': '1.5rem', // Minimum height of the cell component
      },
      maxHeight: {
        'cell-md': '40px', // Maximum height of the cell component, adjust if needed
        'cell-xs': '1.5rem', // Maximum height of the cell component, adjust if needed
      },
      spacing: {
        '2.5': '0.625rem', // 10px gap
        'btn-md': '16px',           // Define spacing for 'sm:w-btn-md' if necessary
        'cell-md': '40px', 
      },
      icon: {
        'md': '1.25rem', // 20px for icons
      },
      skew: {
        '18': '18deg', // Define skew values if they’re customized in Tailwind config
        '21': '21deg',
      },
      screens: {
        'mobile-only': { max: '640px' }, // Example for screens <= 640px
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
