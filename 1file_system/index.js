const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');


//---------create file------------
// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,'this is a hello file');
// }

//---------get directory file------------
// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log(`file name is ${item}`);
//     })
// });

//--------read file--------------
// fs.readFile(`${dirPath}/hello0.txt`,'utf8',(err,data)=>{
//     console.log(data);
// })

//--------append text in file---------
// fs.appendFile(`${dirPath}/hello0.txt`,' and my name is ravi',(err)=>{
//     if(!err) console.log('file updated');
// })

//------rename file------------
// fs.rename(`${dirPath}/hello1.txt`,`${dirPath}/ravi.txt`,(err)=>{
//     if(!err) console.log('file renamed');
// })

fs.unlinkSync(`${dirPath}/ravi.txt`);