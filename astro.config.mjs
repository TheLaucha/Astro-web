import { defineConfig } from "astro/config"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  site: "https://TheLaucha.github.io",
  base: "/Astro-web",
  integrations: [react()],
})
