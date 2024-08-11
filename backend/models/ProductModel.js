import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    equipment: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    specifications: {
        type: String
    },
    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    costPrice: {
        type: Number
    },
    sellPrice: {
        type: Number
    },
    notes: {
        type: String,
        maxLength: 500
    },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;