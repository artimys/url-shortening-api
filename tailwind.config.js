/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // "2xl": "1536px", // disabling 2xl breakpoint
    },

    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif", // font-poppins
      },

      colors: {
        primary: {
          DEFAULT: "hsl(180, 66%, 49%)",
          cyan: "hsl(180, 66%, 49%)",
          "cyan-hover": "hsla(179, 56%, 75%, 1)", // "#9be3e2",
          "dark-violet": "hsl(259, 27%, 26%)",
        },

        secondary: {
          DEFAULT: "hsl(0, 87%, 67%)",
          red: "hsl(0, 87%, 67%)",
        },

        neutral: {
          DEFAULT: "hsl(0, 0%, 75%)",
          gray: "hsl(0, 0%, 75%)",
          "grayish-violet": "hsl(257, 7%, 63%)",
          "very-dark-blue": "hsl(255, 11%, 22%)",
          "very-dark-violet": "hsl(260, 8%, 14%)",
        },

        cyan: {
          // https://uicolors.app/create
          50: "#f0fdfc",
          100: "#ccfbf7",
          200: "#99f6f0",
          300: "#5eeae6",
          400: "#2acfcf",
          500: "#14b5b8",
          600: "#0d8f94",
          700: "#0f7176",
          800: "#11595e",
          900: "#134b4e",
        },
      },

      backgroundImage: {
        "illustration-working": "url('/illustration-working.svg')",

        "shorten-desktop": "url('/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/bg-shorten-mobile.svg')",

        "boost-desktop": "url('/bg-boost-desktop.svg')",
        "boost-mobile": "url('/bg-boost-mobile.svg')",

        "split-white-gray":
          "linear-gradient(to bottom, white 0%, white 50%, hsla(0, 0%, 75%, 20%) 50%, hsla(0, 0%, 75%, 20%) 100%)",
      },

      // backgroundSize: {
      //   "size-200": "200% 200%",
      // },
      // backgroundPosition: {
      //   "pos-0": "0% 0%",
      //   "pos-100": "100% 100%",
      // },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "3rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
