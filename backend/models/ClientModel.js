import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    notes: {
        type: String,
        maxLength: 500
    }
}, { timestamps: true });

const Client = mongoose.model("Client", clientSchema);

export default Client;