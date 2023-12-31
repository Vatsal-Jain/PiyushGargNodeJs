const http = require('http')
const fs = require('fs')
const url = require('url')
const myServer = http.createServer((req,res) => {
    if(req.url === '/favicon.ico') return res.end()
    const myUrl = url.parse(req.url)
console.log(myUrl)
    const log = `${Date.now()}: ${myUrl.pathname} New Request Recieved\n`
    fs.appendFile('log.txt',log,(err,data) => {
        if(err){
            console.log(err)
        }
        else{
            switch(req.url){
                case '/' :res.end("homepage")
                break;
                case '/about':res.end("vatsal jain")
                break;
                default:
                    res.end("not founc")

            }
            
        }
    })
    
}) 

myServer.listen(8000,() => {
    console.log("server started")
})