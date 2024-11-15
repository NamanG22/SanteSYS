module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mushroom: {
          50: '#f0e5d6',
          500: '#c2a174',
        },
        volcanic: {
          900: '#212121',
        },
        marble:{
          100: '#f5f5f5',
        }
      },
      height: {
        'cell-md': '200px', // Define 'cell-md' height
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
      },
      maxHeight: {
        'cell-md': '40px', // Maximum height of the cell component, adjust if needed
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
    },
  },
  plugins: [],
}
