import { defineConfig } from "astro/config"
import cloudflare from "@astrojs/cloudflare"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"

export default defineConfig({
  site: "https://madloper.com",
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      experimentalReactChildren: false,
    }),
  ],
})
