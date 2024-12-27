module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        idcPrimary: "#d97706", // Construction Yellow
        idcAccent: "#f3f4f6", // Light Gray
        idcBackground: "#ffffff", // White background
        idcText: "#4b5563", // Text Gray
        idcHighlight: "#e11d48", // Safety Red highlight
      },
      fontFamily: {
        idcSans: ["Roboto", "sans-serif"], // Bold and modern font
        idcSerif: ["Oswald", "serif"], // Industrial header font
      },
      fontSize: {
        idcHero: "3.5rem", // Larger hero text
        idcSubHero: "1.5rem",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        96: "24rem",
      },
      borderRadius: {
        xl: "1rem",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
      },
      animation: {
        shake: "shake 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
