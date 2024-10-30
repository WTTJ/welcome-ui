import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { generateWebsiteExamplesPages } from "./plugins/generate-website-examples-pages";
import { generateProperties } from "./plugins/generate-properties";

const generateWebsiteExamplesPlugin = () => {
  return {
    name: "website-examples",
    apply: "build",
    // generate website examples for NextJS static pages
    writeBundle() {
      generateWebsiteExamplesPages();
    },
  };
};

const generatePropertiesPlugin = () => {
  return {
    name: "generate-properties",
    apply: "build",
    // generate property file for each component for website props page
    writeBundle() {
      generateProperties();
    },
  };
};

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.tsx"),
      name: "Welcome UI",
      fileName: "[name]",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    dts({ outDir: "dist/types", entryRoot: "lib" }),
    generateWebsiteExamplesPlugin(),
    generatePropertiesPlugin(),
  ],
});
