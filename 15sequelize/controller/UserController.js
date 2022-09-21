const { user } = require('../models');
const db = require('../models');
const User = db.user;

const  addUser = async (req,res) => {
    const jane = await User.create({firstName:'Test',lastName:'dewangan'});
    // const jane = User.build({firstName:'Suman',lastName:'dewangan'});
    // await jane.save();
    res.status(200).json(jane.toJSON());
}

const getUsers = async (req,res) => {
    const data = await User.findAll({});
    res.status(200).json({data:data});
}

const getUser = async(req,res) => {
    const data = await User.findOne({
        where:{
            id:req.params.id
        }
    });
    res.status(200).json({data:data});
}

const createUsers = async(req,res)=>{
    const postData = req.body;
    if(postData.length > 1){
        var data = await User.bulkCreate(postData);
    }else{
        var data = await User.create(postData);
    }
    res.status(200).json({data:data});
}

const deleteUser = async(req,res) => {
    const result = await user.destroy({
        where:{
            id:req.params.id
        }
    });

    res.status(200).json({data:result});
}

const updateUser = async(req,res) => {
    const postData = req.body;
    const result = await User.update(postData,{
        where:{
            id:req.params.id
        }
    });
    res.status(200).json(result);
}

module.exports = {addUser,getUsers,getUser,createUsers,deleteUser,updateUser};


