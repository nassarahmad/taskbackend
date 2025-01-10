const http = require('http')
const fs = require("fs")
const server = http.createServer((req,res)=>{

    //part 1 

    // res.writeHead(200,{"content-type":'text/html'})
    // res.write("hello from the server this is a node js course ")

    // res.end("./contactUs.html")

    // part 2 

    fs.readFile('contactUs.html',(err,data)=>{
        if(err){

            res.writeHead(500,{"content-type":'text/plain'})
            console.log("sorry can't read from the server")
        }
        else {
            res.writeHead(200,{"content-type":"text/html"})
            res.end(data)
        }
    })


})
fs.readFile('index.html',(err,data)=>{
    if(err){

        res.writeHead(500,{"content-type":'text/plain'})
        console.log("sorry can't read from the server")
    }
    else {
        res.writeHead(200,{"content-type":"text/html"})
        res.end(data)
    }
})

// 127.0.0.1 // localhost

const thePort = 3000 

const HOST = "127.0.0.1" ;

server.listen(thePort,HOST,()=>{
    console.log(`the server is now running on port # ${thePort} and host ${HOST}`)
})

