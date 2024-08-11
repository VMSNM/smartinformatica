import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    equipment: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        required: true,
        default: 'Pending'
    },
    notes: {
        type: String,
        maxLength: 500
    },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;