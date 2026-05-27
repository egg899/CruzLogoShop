import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type:String,
        required: true
    },

    description: {
        type:String
    },

    price: {
        type:Number,
        required:true
    },
    
    images: {
        type:[String],
        default: []
    }


});

export default mongoose.model("Product", productSchema);