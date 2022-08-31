const express = require('express');
var bodyParser = require('body-parser')
require('./models');

const app = express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('done');
});

app.listen('5000',()=>{
    console.log(`app is running on port 5000`);
})
