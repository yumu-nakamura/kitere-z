import path from "path";
import glob from "glob";
import { defineConfig } from "vite";
import config from "./config";

const entries = {};
const srcDir = "./src/ts";
const distDir = `./dist/js`;

const srcFileKeys = glob.sync("**/*.+(js|ts)", {
  cwd: srcDir,
  ignore: "**/_*.+(js|ts)",
});

srcFileKeys.map((key) => {
  const srcFilepath = path.join(srcDir, key);
  const fileKey = key.split(".")[0];
  entries[fileKey] = srcFilepath;
});

console.log("Your entry files =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log(entries);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=");

export default defineConfig({
  base: config.pathPrefix,
  plugins: [],
  build: {
    outDir: distDir,
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      input: entries,
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
