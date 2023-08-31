const path = require('path')

const filePath = path.join('/folder','subfolder','text.txt')
console.log(filePath)
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'folder','subfolder','text.txt')
console.log(absolute)