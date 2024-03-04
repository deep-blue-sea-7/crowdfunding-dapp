import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // This is included because it breaks the build if not included
      external: ["@safe-globalThis/safe-ethers-adapters", "@safe-globalThis/safe-ethers-lib", "@safe-globalThis/safe-core-sdk"],
    },
  },
  define: {
    global: "globalThis",
    "process.env": {},
  },
});
