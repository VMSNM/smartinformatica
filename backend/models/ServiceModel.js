import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
    equipment: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxLength: 50,
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

const Service = mongoose.model("Service", serviceSchema);

export default Service;