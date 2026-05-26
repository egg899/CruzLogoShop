import mongoose from "mongoose";


const saleSchema = new mongoose.Schema({

    items: Array,
    total:Number,

    createdAt: {
        type: Date,
        default: Date.now
    }

});

export default mongoose.model("Sale", saleSchema);