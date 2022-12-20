const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function comment() {
  return src("build/**/*.html")
    .pipe($.stripCssComments())
    .pipe($.removeHtmlComments())
    .pipe(dest("build"))
}
