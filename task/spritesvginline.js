const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()
const path = require("path")

module.exports = function spritesvginline() {
  return src("./source/**/{*,}/", { base: "./source" }).pipe(
    $.flatmap((stream, dir) =>
      src(`${dir.path}/spritesvginline/*.svg`)
        .pipe(
          $.svgSprite({
            mode: {
              inline: true,
              symbol: {
                dest: ".",
                sprite: "spritesvginline.svg",
              },
            },
          })
        )
        .pipe(dest(`./source/${path.relative(dir.base, dir.path)}`))
    )
  )
}
