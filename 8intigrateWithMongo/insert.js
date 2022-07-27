const dbConnect = require('./mongodb');

const insert = async () => {
    let db = await dbConnect();
    // let add = await db.insertOne({username:"ravi1",password:"123456"});
    let add = await db.insertMany([
        {username:"suman1",password:"123456"},
        {username:"suman2",password:"123456"},
        {username:"suman3",password:"123456"}
    ]);
    console.log(add);
}
insert();