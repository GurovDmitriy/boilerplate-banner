const { src, dest } = require("gulp")

module.exports = function copyvideo() {
  return src("source/**/*.{mp4,avi,webm}").pipe(dest("dev"))
}
