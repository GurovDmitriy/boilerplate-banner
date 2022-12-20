const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function babel() {
  return src("./dev/**/*.js", { base: "dev" })
    .pipe(
      $.babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(dest("dev"))
}
