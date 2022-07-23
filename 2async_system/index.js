let a = 10;
let b = 0;

const waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    })
})

waitingData.then((data)=>{
    b = data;
    console.log(a+b);
})


