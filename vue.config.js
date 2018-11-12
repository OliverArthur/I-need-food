
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/reset.scss";
          @import "@/styles/variables.scss";
        `
      }
    }
  }
}
