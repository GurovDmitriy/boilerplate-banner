const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function changepath() {
  return src("build/**/*.html")
    .pipe(
      $.replace(/\(['"]?(\.\.\/image)/gim, (match, p1) =>
        match.replace(p1, "image")
      )
    )
    .pipe(
      $.replace(/<img\b[^>]*\bsrc="([^"]*\/)[^/"]*"[^<>]*?>/gim, (match, p1) =>
        match.replace(p1, "image/")
      )
    )
    .pipe(dest("build"))
}
