const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function inlineimg() {
  return src("build/**/*.html")
    .pipe(
      $.base64({
        maxImageSize: 160 * 1024,
      })
    )
    .pipe(dest("build-inline"))
}
