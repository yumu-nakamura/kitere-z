const path = require("path");
const config = require("./config");
const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const mqpacker = require("mqpacker");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass, [
    {
      postcss: postcss([autoprefixer, mqpacker, cssnano]),
    },
    {
      compileOptions: {
        permalink: function (_, inputPath) {
          const parsed = path.parse(inputPath);

          if (parsed.name.startsWith("_")) {
            return false;
          }

          return (data) => {
            return (
              data.page.filePathStem.replace(/^\/scss\//, "/css/") + ".css"
            );
          };
        },
      },
      sass: {
        style: "compressed",
        sourceMap: process.env.NODE_ENV !== "production",
      },
    },
  ]);

  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",

    // Default options shown:
    port: 8080,
    ignore: ["node_modules"],
    watch: false,
    open: false,
    notify: false,
    ui: false,
    ghostMode: false,
    server: {
      baseDir: "dist",
      // routes: {
      //   "/site/pages": "./",
      // },
    },
    startPath: "/",
  });

  return {
    dir: {
      input: "src",
      includes: "site/_includes",
      // layouts: "site/_includes/templates",
      data: "site/_data",
      output: "dist",
    },
    pathPrefix: config.pathPrefix,
  };
};
