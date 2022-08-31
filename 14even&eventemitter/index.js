const express = require('express');
const EventEmitter = require('events');

const app = express();

const event = new EventEmitter;

let count = 0;
event.on("countAPI",()=>{
    count++
    console.log('event call',count);
})


app.get('/',(req,res)=>{
    res.send('this is first page');
    event.emit("countAPI");
})


app.get('/search',(req,res)=>{
    res.send('this is search page');
    event.emit("countAPI");
})
app.get('/update',(req,res)=>{
    res.send('this is update page');
    event.emit("countAPI");
})

const port = 5000;
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})