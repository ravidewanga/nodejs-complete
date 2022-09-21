const express = require('express');
var bodyParser = require('body-parser')
require('./models');

const UserController = require('./controller/UserController');

const app = express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('done');
});

app.get('/add',UserController.addUser);
app.get('/users',UserController.getUsers);
app.get('/user/:id',UserController.getUser);
app.post('/users/create',UserController.createUsers);
app.delete('/user/:id',UserController.deleteUser);
app.patch('/user/:id',UserController.updateUser);

app.listen('5000',()=>{
    console.log(`app is running on port 5000`);
})
