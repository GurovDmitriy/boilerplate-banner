const { src } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function analyze() {
  function getCaption(pathValue) {
    const pathArr = pathValue.split("\\")
    const caption = pathArr.slice(pathArr.length - 2).join("-")

    return caption
  }

  return src("./build/*/*", { base: "./build" }).pipe(
    $.flatmap((stream, dir) =>
      src(`${dir.path}/**/*`).pipe(
        $.sizereport({
          title: getCaption(dir.path),
          "*": {
            maxSize: 300000,
          },
        })
      )
    )
  )
}
