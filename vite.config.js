import { defineConfig } from "vite";

export default defineConfig({
  build: {
    ssr: true,
    lib: { formats: ["es"], entry: "main.js" }
  }
});