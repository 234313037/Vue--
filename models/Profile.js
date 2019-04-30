const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const ProfileSchema = new Schema({

    
    identity:{
        
        type:String,
    },
    describe:{
        
        type:String,
    },
    income:{
        
        type:String,
        require:true
    },
    expend:{
        
        type:String,
        require:true
    },
    //现金
    cash:{
        
        type:String,
        require:true
    },
    //描述
    remark:{
        
        type:String,
    },
    date:{

        type:Date,
        default:Date.now
    }
})

module.exports = Profile = mongoose.model("Profile",ProfileSchema);