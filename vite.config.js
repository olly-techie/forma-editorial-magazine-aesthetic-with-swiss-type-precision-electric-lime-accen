import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";

// Plorpy-generated sources are .js files that contain JSX (the builder's
// preview runs them through sucrase with no build step). Vite parses JSX
// only in .jsx/.tsx, and its top-level `esbuild.loader` override does not
// reach import analysis — so convert .js -> JSX ourselves, ahead of the
// React plugin.
export default defineConfig({
  plugins: [
    {
      name: "plorpy:js-as-jsx",
      enforce: "pre",
      async transform(code, id) {
        if (id.includes("node_modules") || !id.split("?")[0].endsWith(".js")) return null;
        return transformWithEsbuild(code, id, { loader: "jsx", jsx: "automatic" });
      },
    },
    react(),
  ],
  // Dep pre-bundling sees .js too, during `vite dev`.
  optimizeDeps: {
    esbuildOptions: { loader: { ".js": "jsx" } },
  },
});
