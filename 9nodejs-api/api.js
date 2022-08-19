const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/',async (req,res)=>{
    let db = await dbConnect();
    let data = await db.find().toArray();
    res.send(data);
})

app.post('/',async (req,res)=>{
    let db = await dbConnect();
    let insert = await db.insertMany(req.body);
    if(insert.insertedCount > 0){
        res.send('Record insert successfully');
    }else{
        res.send('Something went wrong. Please try again.');
    }
    
})

app.listen(5000);