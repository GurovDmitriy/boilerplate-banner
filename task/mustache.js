const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function mustache() {
  return src(["source/**/*.html", "dev/**/*.css", "dev/**/*.js"])
    .pipe($.mustache("source/data/data.json", {}, {}))
    .pipe(dest("dev"))
}
