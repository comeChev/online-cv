/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1rem, 5vw, 5rem)",
        clampMd: "clamp(0.8rem, 3vw, 2rem)",
        clampSm: "clamp(0.4rem, 2.2vw, 1.3rem)",
      },
      fontFamily: {
        code: ["Source Code Pro", "sans-serif"],
        fira: ["Fira Code", "sans-serif"],
        coiny: ["Asap", "cursive"],
      },
      animation: {
        bouncing: "bouncing 0.7s ",
        rotate: "borderAnimate 1s linear infinite",
      },
      keyframes: {
        bouncing: {
          "20%": {
            "-webkit-animation-timing-function":
              "cubic-bezier(0.215, 0.61, 0.355, 1)",
            "animation-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
            "-webkit-transform": "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
          },
          "40%": {
            "-webkit-animation-timing-function":
              "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            "animation-timing-function":
              "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            "-webkit-transform": "translate3d(0, -30px, 0)",
            transform: "translate3d(0, -30px, 0)",
          },
          "43%": {
            "-webkit-animation-timing-function":
              "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            "animation-timing-function":
              "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            "-webkit-transform": "translate3d(0, -30px, 0)",
            transform: "translate3d(0, -30px, 0)",
          },
          "53%": {
            "-webkit-animation-timing-function":
              "cubic-bezier(0.215, 0.61, 0.355, 1)",
            "animation-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
            "-webkit-transform": "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
          },
          "80%": {
            "-webkit-animation-timing-function":
              "cubic-bezier(0.215, 0.61, 0.355, 1)",
            "animation-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
            "-webkit-transform": "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
          },
          "70%": {
            "-webkit-animation-timing-function":
              "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            "animation-timing-function":
              "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            "-webkit-transform": "translate3d(0, -15px, 0)",
            transform: "translate3d(0, -15px, 0)",
          },
          "90%": {
            "-webkit-transform": "translate3d(0, -4px, 0)",
            transform: "translate3d(0, -4px, 0)",
          },
        },
        borderAnimate: {
          "100%": {
            transform: "rotate(1turn)",
          },
        },
      },
      boxShadow: {
        rl: "15px 20px 15px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },

  plugins: [],
};
