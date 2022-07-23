// const http = require('http');
// const data = require('./data');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'Application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(3000);
//console.log(process.argv);
const fs = require('fs');

if(process.argv[2] == 'add'){
    fs.writeFileSync(process.argv[3],process.argv[4]);
}else if(process.argv[2] == 'remove'){
    fs.unlinkSync(process.argv[3]);
}else{
    console.log('Invalid process');
}

