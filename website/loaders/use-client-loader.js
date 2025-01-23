module.exports = function (source) {
  if (!source.includes('"use client"') && !source.includes("'use client'")) {
    return `'use client';\n${source}`
  }
  return source
}
