/* eslint-disable no-undef */
const gulp = require("gulp")
const browserSync = require("browser-sync").create()

// style

const style = require("./task/style.js")
const inlinestyle = require("./task/inlinestyle.js")
const changepath = require("./task/changepath.js")
const comment = require("./task/comment.js")
const removecss = require("./task/removecss.js")
const cssnano = require("./task/cssnano.js")
const prettier = require("./task/prettier.js")

// mustache

const mustache = require("./task/mustache.js")

// image

const image = require("./task/image.js")
const spritesvg = require("./task/spritesvg.js")
const spritesvginline = require("./task/spritesvginline.js")
const spritepng = require("./task/spritepng.js")
const inlineimg = require("./task/inlineimg.js")

// del

const dele = require("./task/dele.js")

// copy

const copyvideo = require("./task/copyvideo.js")
const copymedia = require("./task/copymedia.js")

// js

const babel = require("./task/babel.js")
const webpack = require("./task/webpack.js")

// file

const analyze = require("./task/analyze.js")

// test

const test = require("./task/test.js")

// watch

function watcher() {
  gulp.watch("source/**/*.less", gulp.series(style, mustache))
  gulp.watch("source/**/*.js", gulp.series(webpack, babel, mustache))
  gulp.watch(
    ["source/**/*.html", "source/data/*.json"],
    gulp.series(style, webpack, babel, mustache)
  )
}

// serve

function serve() {
  browserSync.init({
    server: "dev",
    // Tunnel нужен в случае, когда нужно передать баннер на внешний тест
    // tunnel: "banner-test",
  })

  browserSync.watch("dev/**/*.*").on("change", browserSync.reload)
}

// command

exports.test = gulp.series(test)

exports.image = gulp.series(
  spritesvg,
  spritesvginline,
  spritepng,
  image,
  copyvideo,
  webpack,
  babel,
  style,
  mustache
)

exports.dev = gulp.series(
  webpack,
  babel,
  style,
  mustache,
  gulp.parallel(serve, watcher)
)

exports.build = gulp.series(
  dele,
  removecss,
  cssnano,
  inlinestyle,
  comment,
  prettier,
  changepath,
  copymedia,
  analyze
)

exports.buildinline = gulp.series(
  dele,
  removecss,
  cssnano,
  inlinestyle,
  comment,
  prettier,
  changepath,
  copymedia,
  inlineimg,
  analyze
)
