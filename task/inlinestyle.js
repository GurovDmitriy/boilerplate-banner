const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function inlinestyle() {
  return src("dev/**/*.html")
    .pipe(
      $.inlineSource({
        compress: false,
      })
    )
    .pipe(dest("build"))
}
