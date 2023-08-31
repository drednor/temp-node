const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to our Homepage")
    }
    else if(req.url==="/about"){
        res.end("This is a short history about our company")
    }
    else{
        res.end("The page you are visiting does not exist")
    }
    
})

server.listen(5000)