const express = require('express');
const app = express();
const {middleware} = require('./middleware');
const route = express.Router();

//app.use(middleware);// application level middleware applied every where

route.use(middleware);

app.get('/',(req,res)=>{
    res.send('<h1>Welcome Ravikant</h1>');
})


app.get('/about',(req,res)=>{
    res.send('<h1>This is a about page</h1>');
})

route.get('/dashboard',(req,res)=>{
    res.send('<h1>This is a about page</h1>');
})


route.get('/user',(req,res)=>{
    res.send('<h1>This is a user page</h1>');
})

app.use('/',route);

app.listen(3000);