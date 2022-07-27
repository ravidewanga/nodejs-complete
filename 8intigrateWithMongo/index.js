const dbConnect = require('./mongodb');
// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

const main = async () => {
    let connect = await dbConnect();
    let data = await connect.find().toArray();
    console.log(data);
}
main();