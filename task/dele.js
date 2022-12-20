const del = require("del")

module.exports = function dele() {
  return del(["build*", "product*", "public*"])
}
