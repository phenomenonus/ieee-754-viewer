import react from "@vitejs/plugin-react";

import path from "path";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react",
              priority: 20,
              test: /node_modules[\\/]react/,
            },
            {
              name: "ui",
              priority: 15,
              test: /node_modules[\\/]@fluentui/,
            },
            {
              name: "vendor",
              priority: 10,
              test: /node_modules/,
            },
          ],
        },
      },
    },
  },
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
