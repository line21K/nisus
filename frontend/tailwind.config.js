/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: [
    ".src/assets/**/*.css",
    ".src/components/**/*.vue",
    ".src/layouts/**/*.vue",
    ".src/pages/**/*.vue"
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "968px",
      lg: "1140px"
    },
    fontFamily: {
      sans: [
        "Poppins",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900"
    },
    fontSize: {
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      32: "32px",
      42: "42px"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.4",
      normal: "1.5",
      relaxed: "1.6",
      loose: "1.8"
    },
    letterSpacing: {
      tighter: "-0.03em",
      tight: "-0.015em",
      normal: "0",
      wide: "0.015em",
      wider: "0.03em"
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    borderRadius: {
      none: "0",
      default: "8px",
      lg: "12px",
      xl: "20px",
      full: "100%"
    },
    opacity: {
      0: "0",
      25: "0.25",
      50: "0.5",
      75: "0.75",
      90: "0.9",
      100: "1"
    },
    boxShadow: {
      brand: "0 5px 20px rgba(245, 77, 124, 0.2)",
      "brand-lg": "0 10px 40px rgba(245, 77, 124, 0.2)",
      default: "0 10px 30px rgba(0, 0, 0, 0.1)",
      none: "none"
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      brand: {
        default: "#F33369",
        darker: "#F21C59",
        background: "#F9F8FD"
      },
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c"
      }
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      grab: "grab",
      grabbing: "grabbing",
      "not-allowed": "not-allowed"
    }
  },
  variants: {
    margin: ["responsive", "first"],
    cursor: ["responsive", "active"]
  },
  plugins: []
};
