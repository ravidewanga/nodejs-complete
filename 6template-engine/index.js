const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    const user = {
        name:'ravikant dewangan',
        email:'ravidewangan13@gmail.com',
        city:'Raipur',
        skills:['php','node','laravel','javascript']
    };
    res.render('profile',{user});
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.listen(3000);
