const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()
const path = require("path")

module.exports = function spritesvg() {
  return src("./source/**/{*,}/", { base: "./source" }).pipe(
    $.flatmap((stream, dir) =>
      src(`${dir.path}/spritesvg/*.svg`)
        .pipe(
          $.svgSprite({
            mode: {
              css: {
                dest: ".",
                bust: false,
                sprite: "../image/sprite.svg",
                prefix: ".",
                dimensions: true,
                layout: "vertical",
                render: {
                  less: {
                    dest: "spritesvg.less",
                  },
                },
              },
            },
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
