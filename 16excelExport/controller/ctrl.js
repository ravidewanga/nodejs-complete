const {sequelize} = require('../models');

const  getUsers = async (req,res) => {
    const [results, metadata] = await sequelize.query("SELECT * FROM users");
    return results;
}

module.exports = {getUsers};