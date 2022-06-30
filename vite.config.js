import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [topLevelAwait()],
  build: {
    ssr: true,
    lib: { formats: ["es"], entry: "main.js" }
  }
});