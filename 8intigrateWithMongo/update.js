const dbConnect = require('./mongodb');

const updateData = async () => {
    let db = await dbConnect();
    let update = await db.updateMany(
        {name:'ravikant'},
        {
            $set:{password:'8817721954'}
        }
    );
    console.log(update);
}

updateData();