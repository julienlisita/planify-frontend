/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        taupe: '#453F3C',         // Couleur taupe sombre
        linen: '#F7EDE2',         // Couleur lin (beige clair)
        mossGreen: '#8A9A5B',     // Vert mousse
        brownSugar: '#C76A4A',    // Brun "brown sugar" (orange brun)
        black: '#000000',         // Noir
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], // Ajoutez cette ligne
      },
    },
  },
  plugins: [],
}
