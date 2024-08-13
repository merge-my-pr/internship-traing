const express=require('express');

const mongoose=require('mongoose')

// step-1 connecting with mongoose
async function connect()
{
   await mongoose.connect("mongodb+srv://admin:1234@minidb.fj06imn.mongodb.net/");
   console.log("db connected");
}

connect()

const server=express();
// step-2 creating schema 
const Phonebook= new mongoose.Schema(
    {
        name:String,
        phone:String,
        location:String
    },
    { 
      collection:'PHONEBOOK'
    }
)

// step-3 creating model
const Model= mongoose.model('PHONEBOOK',Phonebook)





server.get('/',(req,res)=>{
    res.send("app is working fine")

})


server.get('/db',async (req,res)=>{
        const data = await Model.find({});
        res.json(data)
})



server.get('/db/:id', async (req,res)=>{
        const data= await Model.findOne({ _id: req.params.id })
        // console.log(data);
        res.json(data)
})


server.post('/postdata', async (req,res)=>{
    const data=new Model()   // step1 creating instance of model
    // step-2 declaring data using model instance (data)
    data.name="ronak"
    data.phone="131231"
    data.location="erode"

    // step-3 saving the data created
    await data.save()
    console.log("data saved");
    res.json(data)

})


server.delete('/delete/:id',async (req,res)=>{
        await Model.deleteOne({ _id : req.params.id})
})



server.listen(8000,()=>{
    console.log("server is running");
})


// GITHUB API 
// https://api.github.com/users/

// endpoints
// /users - GET - READ


// HTTP Methods
// GET - read
// POST - write
// DELETE -delete
// PUT/PATCH- update