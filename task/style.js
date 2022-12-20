const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()
const autoprefixer = require("autoprefixer")
const postcssPresetEnv = require("postcss-preset-env")

module.exports = function style() {
  return src("source/**/style.less")
    .pipe(
      $.plumber({
        errorHandler: (err) => {
          console.log(err)
        },
      })
    )
    .pipe(
      $.less({
        relativeUrls: true,
      })
    )
    .pipe($.postcss([autoprefixer(), postcssPresetEnv()]))
    .pipe(dest("dev"))
}
