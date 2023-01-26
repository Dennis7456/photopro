/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      primary: 'Rubik'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm:'640px',
      md: '768px',
      lg: '1224px',
      xl: '1350',
    },
    extend: {
      colors: {
        primary: '#6d5e00',
        on_primary:'#ffffff',
        primary_container:'#fce365',
        on_primary_container:'#211b00',
        
        secondary:'#0062a1',
        on_secondary:'#ffffff',
        secondary_container:'#d0e4ff',
        on_secondary_container:'#001d35',
        
        tertiary:'#42664f',
        on_tertiary:'#ffffff',
        tertiary_container:'#c4eccf',
        on_tertiary_container:'#002110',

        error:'#ba1a1a',
        on_error:'#ffffff',
        error_container:'#ffdad6',
        on_error_container:'#ffdad6',

        background:'#fffbff',
        on_background:'#1d1b16',
        surface:'#fffbff',
        on_surface:'#1d1b16',

        outline:'#7c7768',
        surface_variant:'#e9e2d0',
        on_surface_variant:'#4a4739',

        success: '#d1fae5',
        info:'#00696f',
        warning:'#e9bd78',
        danger: '#ba1a1a',

        //Dark theme
        dark_primary: '#dec64c',
        dark_on_primary:'#393000',
        dark_primary_container:'#524600',
        dark_on_primary_container:'#fce365',
        
        dark_secondary:'#9ccaff',
        dark_on_secondary:'#003257',
        dark_secondary_container:'#00497b',
        dark_on_secondary_container:'#d0e4ff',
        
        dark_tertiary:'#a9d0b4',
        dark_on_tertiary:'#133723',
        dark_tertiary_container:'#2b4e39',
        dark_on_tertiary_container:'#c4eccf',

        dark_error:'#ffb4ab',
        dark_on_error:'#690005',
        dark_error_container:'#93000a',
        dark_on_error_container:'#ffdad6',

        dark_background:'#1d1b16',
        dark_on_background:'#e7e2d9',
        dark_surface:'#1d1b16',
        dark_on_surface:'#e7e2d9',

        dark_outline:'#969080',
        dark_surface_variant:'#4a4739',
        dark_on_surface_variant:'#cdc6b4',

        dark_success: '',
        dark_info:'',
        dark_warning:'',
        dark_danger: '',

        accent: {
          DEFAULT: '#6738E1',
          hover: '#5A26DF'
        },
        grey: '#494455'
      },
      backgroundImage: {
        bgimageLight: "url('/src/assets/userimages/bee-7707052.jpg')"
      }
    },
  },
  plugins: [],
}
