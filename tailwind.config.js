/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Heading sizes
        'h1-mobile': ['32px', '1.2'], // Font size, Line height
        'h1-tablet': ['36px', '1.2'],
        'h1-desktop': ['48px', '1.2'],

        'h2-mobile': ['24px', '1.2'],
        'h2-tablet': ['28px', '1.2'],
        'h2-desktop': ['36px', '1.2'],

        // Subheading sizes
        'h3-mobile': ['20px', '1.3'],
        'h3-tablet': ['24px', '1.3'],
        'h3-desktop': ['28px', '1.3'],

        'h4-mobile': ['18px', '1.3'],
        'h4-tablet': ['20px', '1.3'],
        'h4-desktop': ['24px', '1.3'],

        // Body text sizes
        'body-mobile': ['14px', '1.5'],
        'body-tablet': ['16px', '1.6'],
        'body-desktop': ['18px', '1.6'],

        // Subtext sizes
        'subtext-mobile': ['12px', '1.4'],
        'subtext-tablet': ['14px', '1.4'],
        'subtext-desktop': ['16px', '1.4'],
      },
      colors:{
        navbar_bg: "#585858",
        menu_bottom: "#0E0E0E",
        service_heading: "#C4A366",
        service_bg: "#000D2D",
        text_red: "#FF343D",
        choose_bg:"#FF0050",
        choose_div_bg:"#020D2D",
        black_button: "#141414",
        review_bg:"#E3AFBC",
        subscribe:"#D9D9D9",
        subscribe_border:"#808080",
        subscribe_text:"#8B8B8B",
        menu_bg:"#222222"
       
      },
      fontFamily:{
        jost: ["Jost", "sans-serif"]
      }
    },
  },
  plugins: [],
}

