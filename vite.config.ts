import {defineConfig} from "vite";
import {resolve} from "path";
import react from "@vitejs/plugin-react-swc";
import viteTsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
  base: "",
  plugins: [
    react(),
    viteTsconfigPaths(),
    dts({include: "lib", exclude: "lib/**/*.stories.ts"})
  ],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"]
    }
  },
});
