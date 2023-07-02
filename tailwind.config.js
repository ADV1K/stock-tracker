/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: true,
    // themes: [ "dracula",
    //   {
    //     mytheme: {
    //       primary: "#2e2e2e",
    //       secondary: "#6c6c6c",
    //       accent: "#aeaeae",
    //       neutral: "#f1f1f1",
    //       "base-100": "#1a1a19",
    //       info: "#3b82f6",
    //       success: "#1CB950",
    //       warning: "#e6c13d ",
    //       error: "#E53434",
    //     },
    //   },
    // ],
    // darkTheme: "dracula",
  },
};
