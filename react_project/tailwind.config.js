/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["IM Fell DW Pica", "serif"],
      },
      screens: {
        md: "840px",
      },
    },
  },
  plugins: [],
});
