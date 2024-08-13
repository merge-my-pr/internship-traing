// hyper text transfer protocol
const http=require('http')
const file=require('fs')

const data=file.readFileSync('db.json').toString()

const server=http.createServer((req,res)=>{
    res.end(data)
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("server started");
})
