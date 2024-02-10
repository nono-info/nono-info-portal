import { defineConfig, presetAttributify, presetUno } from "unocss";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "M PLUS Rounded 1c",
      },
    }),
  ],
});
