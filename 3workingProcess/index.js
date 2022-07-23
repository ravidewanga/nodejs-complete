console.log('first log');

setTimeout(()=>{
    console.log('second log');
},2000)

setTimeout(()=>{
    console.log('third log');
},0)

console.log('fourth log');