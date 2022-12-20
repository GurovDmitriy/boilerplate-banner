const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function cssnano() {
  return src("dev/**/*.css")
    .pipe(
      $.cssnano({
        preset: [
          "advanced",
          {
            normalizeUrl: false,
            autoprefixer: false,
            reduceIdents: false,
            mergeIdents: false,
            zindex: false,
          },
        ],
      })
    )
    .pipe(dest("dev"))
}
