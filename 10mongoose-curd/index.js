const express = require('express');
require('./config');
const Product = require('./Product');
const app = express();

app.use(express.json());

app.post('/create', async (req,res)=>{
    const data = new Product(req.body);
    const result = await data.save();
    res.send(result);
})

app.get('/list',async (req,res)=>{
    const data =await Product.find();
    res.send(data);
})

app.delete('/delete/:_id',async(req,res)=>{
    //console.log(req.params);
    const response =await Product.deleteOne();
    res.send(response);
})

app.put('/update/:_id',async(req,res)=>{
    const response = await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    res.send(response);
})

app.listen(5000,()=>{
    console.log('app is running on port 5000');
});

