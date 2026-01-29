import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteTsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"
import viteReact from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"

export default defineConfig({
  server: {
    port:3000,
  },
  plugins: [
    tailwindcss(),
    viteTsConfigPaths({
      projects: ["./tsconfig.json"]
    }),
    tanstackStart(),
    nitro(),
    // react's vite plugin must come after start's vite plugin
    viteReact(),
  ],
})
