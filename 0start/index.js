// const fs = require('fs').writeFileSync;
// fs('ravi.txt','Hiiiii');

const http = require('http');

//---------function--------
function controlFunction(req,res){
    res.write('<h1>Hello Ravikant</h1>');
    res.end();
}

// arrow function
const controlFunction1 = (req,res) => {
    res.write('<h1>Hello Ravikant</h1>');
    res.end();
}

http.createServer((req,res) => {
    res.write('<h1>Hello Ravikant</h1>');
    res.end();
}).listen(3000);