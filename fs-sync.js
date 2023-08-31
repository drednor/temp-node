const {readFileSync, writeFileSync, read} = require('fs')

const text = readFileSync('./folder/subfolder/text.txt','utf-8')
console.log(text)

writeFileSync('./folder/subfolder/newtext.txt',`some response from text.txt who said ${text}`)
