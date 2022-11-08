const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    _id: {
        type:Number,
        require:true
    },
    companyId:{
        type:Number,
        require:true
    },
    primaryText:{
        type:String,
        require:true
    },
    headline:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:false
    },
    CTA:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    }

})

const Ad = mongoose.model('Ad',adSchema);

module.exports = Ad;

