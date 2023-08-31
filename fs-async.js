const {readFile, writeFile} = require('fs')
console.log("starting task")
readFile('./folder/subfolder/text.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return 
    }
    const first = result
    readFile('./folder/subfolder/newtext.txt','utf8',(err, result)=>{
        if(err){
            console.log(err)
            return 
        }
        const second = result
        writeFile('./folder/subfolder/asyncresult.txt',`this is the new async file with text.txt data = ${first} and newtext.txt data =${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return 
            }
            console.log("done with task")
        })
    })
})
console.log("whats the next task")