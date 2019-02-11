var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    loc:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    found:{
        type:String,
        required:true
    },
    progress:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

mongoose.model('Entries', EntrySchema);