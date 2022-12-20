const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function removecss() {
  return src("dev/**/*.css")
    .pipe(
      $.purgecss({
        content: ["dev/**/*.html", "dev/**/*.js"],
      })
    )
    .pipe(dest("dev"))
}
