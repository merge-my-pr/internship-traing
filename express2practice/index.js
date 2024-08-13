const express = require('express')
const mongoose= require('mongoose')
const server=express()


async function connect(){
  await  mongoose.connect("mongodb+srv://admin:1234@minidb.fj06imn.mongodb.net/")
  console.log("db connected");
}
connect()

const Book=new mongoose.Schema({
    bookname:String,
    bookauthor:String,
    bookprice:Number,
    booktotalpages:Number,
    bookpublishdate:String
},
{
    collection:'BOOK'
}
)
const BookModel=mongoose.model('BOOK',Book)




server.get('/',(req,res)=>{
    res.send("hello")
})



server.post('/writedata',async (req,res)=>{
    const book=new BookModel();

    book.bookname="Develop your attitude"
    book.bookauthor="Dwight schrute"
    book.bookprice=3000
    book.booktotalpages=1500
    book.bookpublishdate="1999-JUN-1"
    await book.save()
    res.send(book)
})

server.get('/books',async(req,res)=>{
    const data=await BookModel.find({})
    res.json(data)
})

server.get('/deletebook/:id', async(req,res)=>{
   await BookModel.deleteOne({ _id : req.params.id})
    res.send("deleted")
})


server.get('/books/:id',async (req,res)=>{
    const data=await BookModel.findOne({ _id : req.params.id})
    res.json(data)
})


server.listen('8000',()=>{
    console.log("server running");
    
})
