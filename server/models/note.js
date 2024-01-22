const { Timestamp } = require("bson");
const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref: "User",
        required:true
    }

},{timestamps : true});
module.exports = mongoose.model("Note", userSchema);