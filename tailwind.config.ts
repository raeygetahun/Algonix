import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'bg-img-1':"url('/Ellipse (1).png')",
          'bg-img-2':"url('/Ellipse (2).png')",
          'bg-img-3':"url('/Ellipse.png')",
      },
      fontFamily:{
        "Poppins":['Poppins', "sans-serif"],
        "Space":['Space Grotesk', "sans-serif"]
      },
      screens: {
        '2md': '980px',
        'mobland':'480px',
        'nomd': {'max': '767px'},
      },
      colors: {
        'white-100': 'rgba(255, 255, 255, 1.0)',
        'white-60': 'rgba(255, 255, 255, 0.60)',
        'white-30': 'rgba(255, 255, 255, 0.30)',
        'white-20': 'rgba(255, 255, 255, 0.30)',
        'white-10': 'rgba(255, 255, 255, 0.10)',
        'white-0': 'rgba(255, 255, 255, 0.0)',
        
      },
     
      textColor: {
        'transparent': 'rgba(0, 0, 0, 0.1)'
      },
    
      
    },
  },
  plugins: [],
}
export default config
