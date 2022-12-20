const { src, dest } = require("gulp")

module.exports = function copymedia() {
  return src("dev/**/*.{png,jpg,gif,svg,mp4,avi,webm}").pipe(dest("build"))
}
