const { log } = require('console');
const express=require('express');
const http=require('http')

const { Server } = require('socket.io');



const app=express()
const server=http.createServer(app)

const io = new Server(server) // socket <-> http

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

// socket io
io.on('connection',(socket)=>{
    console.log("user connected");
    socket.on('disconnect',()=>{
        console.log("user dissconnted");  
    })
    
    socket.on('chat message',(message)=>{
            console.log(message);
            io.emit('chat message',message)
    })



})


server.listen(3000,()=>{
    console.log("server is running");
    
})

