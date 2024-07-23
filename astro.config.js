import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"

export default defineConfig({
  site: "https://madnowruzi.github.io",
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      experimentalReactChildren: false,
    }),
  ],
})
