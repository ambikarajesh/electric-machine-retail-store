const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:1
    },
    discription:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    modelId:{
        type:String,
        required:true
    },
    image:{
        type:Array,
        default:[]
    },
    sold:{
        type:Number,
        default:0
    },
    available:{
        type:Boolean
    }
}, {timestamps:true})

module.exports = mongoose.model('Product', productSchema);