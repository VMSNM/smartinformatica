import mongoose from 'mongoose';

const debtSchema = mongoose.Schema({
    type: {
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
    inDebtValue: {
        type: Number,
    },
    totalValue: {
        type: Number,
    },
    notes: {
        type: String,
        maxLength: 500
    },
}, { timestamps: true });

const Debt = mongoose.model("Debt", debtSchema);

export default Debt;