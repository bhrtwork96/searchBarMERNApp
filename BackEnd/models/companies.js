const mongoose = require('mongoose');


const companiesSchema = new mongoose.Schema({
    _id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    }
})

const Companies = mongoose.model('Companies',companiesSchema);

module.exports = Companies;