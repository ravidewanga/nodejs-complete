const middleware = (req,res,next)=>{
    if(!req.query.age){
        res.send('Please provide age');
    }else if(req.query.age < 18){
        res.send('You are not access this page');
    }else{
        next();
    }
}
module.exports = {middleware};