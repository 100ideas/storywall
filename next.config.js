// next.config.js
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/create": { page: "/create" },
      "/rasterize": { page: "/rasterize" }
    }  },
}