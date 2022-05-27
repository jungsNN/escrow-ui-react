// for theme toggle: https://github.com/saadeghi/theme-change
module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    plugins: [
      require('daisyui'),
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio")
    ],
    daisyui: {
      prefix: "tw-",
      styled: false,
      utils: true,
      logs: true,
      darkMode: true,
      darkTheme: "cryptopunk",
      themes: [
        {
          punk: {
            ...require("daisyui/src/colors/themes")["[data-theme=cryptopunk]"],
            primary: "#ffa115",
            secondary: "black",
            info: "black",
            success: "red",
            warning: "gray",
            error: "red",
          },
        
          "primary": "#ffa115",

            "accent": "white",

            // "base-100": "#000000",
            "background": "#000000",
            "info": "#000000",
            "body": "#000000",

            "success": "#25D41F",

            "warning": "#9ca3af",

            "error": "#F14848",
        /* Base color of page, used for blank backgrounds */
            'base-200': '#35363a',          /* Base color, a little darker */
            'base-300': '#222222',          /* Base color, even more darker */
            'base-content': '#f9fafb',      /* Foreground content color to use on base color */
            /* Error */
        },
        'synthwave',
        'dark',
      ],
      base: true,
    },
  },
}
