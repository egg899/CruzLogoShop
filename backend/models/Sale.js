import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({

    items: {
        type: Array,
        required: true
    },

    total: {
        type: Number,
        required: true
    },

    guest: {
        type: Boolean,
        default: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

export default mongoose.model("Sale", saleSchema);