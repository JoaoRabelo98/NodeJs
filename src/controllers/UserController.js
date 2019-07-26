const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async index(req, res){
        const users = await User.find();

        return Response.json(users);
    },
    async show(req, res){
        const user = await User.findById(req.params.id);
        
        return res.json(user);
    }
};


