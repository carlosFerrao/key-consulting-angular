/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  mode: "jit",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      subtitle: "#4B5565",
      status: "#DC6803",
      bgStatus: "#fef0c7",
      bgUser: "#364152",
      user: "#FCFCFD",
      bgContract: "#EEF2F6",
      contract: "#363F72",
      bgBlueIcon: "#e0f2fe",
    },
    container: {
      screens: {
        sm: "640px",
        md: "1024px",
        lg: "1280px",
        xl: "1500px",
      },
    },
  },
  plugins: [],
};
