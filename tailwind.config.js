/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        elden: {
          bg: "#100d08",
          surface: "#1b1610",
          raised: "#221c14",
          fg: "#ebe4d6",
          muted: "#8d8579",
          line: "#302a23",
          gold: "#d7aa42",
          "gold-bright": "#e8c468",
          "gold-dim": "rgba(215,170,66,0.16)",
        },
      },
      fontFamily: {
        display: ["Cinzel_700Bold"],
        "display-medium": ["Cinzel_500Medium"],
        serif: ["Cinzel_500Medium"],
        sans: ["Inter_400Regular"],
        body: ["Inter_400Regular"],
        "body-medium": ["Inter_500Medium"],
        "body-semibold": ["Inter_600SemiBold"],
        "body-bold": ["Inter_700Bold"],
        "body-italic": ["Inter_400Regular_Italic"],
        mono: ["JetBrainsMono_400Regular"],
        "mono-medium": ["JetBrainsMono_500Medium"],
      },
    },
  },
  plugins: [],
}
