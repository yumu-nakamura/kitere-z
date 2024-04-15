const SITE_URL = "./";
// const SITE_URL = "http://192.168.2.63:5500/dist/";

module.exports = {
  url:
    process.env.NODE_ENV !== "production" ? "http://localhost:8080/" : SITE_URL,
  imgPath:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8080/images"
      : SITE_URL + "images",
};
