const dbConnect = require('./mongodb');

const deleteData = async ()=>{
    let db = await dbConnect();
    // let remove = await db.deleteOne({name:'ravikant'});
    let remove = await db.deleteMany({name:'ravikant'});
    console.log(remove);
}

deleteData();