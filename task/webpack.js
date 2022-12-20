const webpackStream = require("webpack-stream")
const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()
const path = require("path")
module.exports = function webpack() {
  return src("./source/**/{*,}/", { base: "./source" }).pipe(
    $.flatmap((stream, dir) =>
      src(`${dir.path}/js/*.js`)
        .pipe(
          webpackStream({
            mode: "production",
          })
        )
        .pipe(dest(`./dev/${path.relative(dir.base, dir.path)}/js/`))
    )
  )
}
