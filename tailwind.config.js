/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          100: "#fefefe",
          200: "#8e8e8e",
          300: "#8a8a8a",
          400: "#89807a",
          500: "#7f7f7f",
          600: "#7c7c7c",
          700: "#7a7a7a",
          800: "#787878",
          900: "#767676",
          1000: "#757575",
          1100: "#242323",
          1200: "#191919",
          1300: "#191818",
          1400: "#231300",
        },
        khaki: "#ebd96b",
        whitesmoke: {
          100: "#f4f6f5",
          200: "#efeceb",
          300: "#eaeaea",
          400: "#ece8e7",
        },
        lightsteelblue: "#c2c8da",
        red: "#ea1701",
        gainsboro: {
          100: "#e9e6e6",
          200: "#d9d9d9",
          300: "rgba(221, 221, 221, 0.4)",
        },
        dimgray: "#6e6f72",
        snow: "#fffcf8",
        goldenrod: "#e5c643",
        silver: "#c4c4c4",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "mid-5": "17.5px",
        "smi-2": "12.2px",
        xl: "20px",
        mini: "15px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "3xl": "22px",
      "21xl": "40px",
      "13xl": "32px",
      "2xs-5": "10.5px",
      "smi-2": "12.2px",
      "29xl": "48px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
