/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151618",
        secondary: "#D08C30",
        666565: "#666565",
        f6e8d6: "#F6E8D6",
        444546: "#444546",
        394149: "#394149",
        "3d3535": "#3D3535",
        717171: "#717171",
        d0d0d0: "#D0D0D0",
        fdf9f5: "#FDF9F5",
        ac917d: "#AC917D",
        "4e4e4e": "#4e4e4e",
        fbfbfb: "#FBFBFB",
        cbcac9: "#CBCAC9",
      },
      fontFamily: {
        fahkwang: ["Fahkwang", "sans-serif"],
      },
    },
  },
  plugins: [],
};
