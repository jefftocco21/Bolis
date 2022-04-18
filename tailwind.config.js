module.exports = {
  content: ['./*.html'], //look for any html in root
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        gray: '#808080',
        lightGray: '#D3D3D3'
      }
    },
  },
  plugins: [],
}
