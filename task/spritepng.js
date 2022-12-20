const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()
const path = require("path")

module.exports = function spritepng() {
  return src("./source/**/{*,}/", { base: "./source" }).pipe(
    $.flatmap((stream, dir) =>
      src(`${dir.path}/spritepng/*.png`)
        .pipe(
          $.spritesmith({
            imgName: "sprite.png",
            cssName: "spritepng.less",
            algorithm: "top-down",
            padding: 10,
          })
        )
        .pipe(
          $.if(
            "*.less",
            dest(`./source/${path.relative(dir.base, dir.path)}/../style/`),
            dest(`./source/${path.relative(dir.base, dir.path)}`)
          )
        )
    )
  )
}
