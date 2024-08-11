import Client from "../models/ClientModel.js";
import Debt from "../models/DebtModel.js";
import Product from "../models/ProductModel.js";

const createDebt = async (req, res) => {    
    try {
        const { type, description, clientID, inDebtValue, totalValue, notes } = req.body;
        if (!type || !description || !clientID) return res.status(400).json({ error: 'Type, description and client fields are required' });

        const client = await Client.findById(clientID);
        if (!client) return res.status(400).json({ error: 'Client not found' });

        const maxLength = 500;
        if (notes?.length > maxLength) return res.status(400).json({ error: `Notes must be less than ${maxLength} characters` });

        const newDebt = new Debt({
            type,
            description,
            clientID,
            inDebtValue: inDebtValue || 0,
            totalValue: totalValue || 0,
            notes: notes || 'No relevant notes'
        })
        await newDebt.save();

        res.status(200).json({ message: "Debt created successfully", result: newDebt });
    } catch (error) {
        console.log("Error in createDebt controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const deleteDebt = async (req, res) => {
    try {
        const debt = await Debt.findById(req.params.id);
        if (!debt) return res.status(404).json({ message: 'Debt not found' });

        await Debt.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Debt deleted successfully", result: debt });

    } catch (error) {
        console.log("Error in deleteDebt controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const updateDebt = async (req, res) => {
    const { type, description, clientID, inDebtValue, totalValue, notes } = req.body;
    try {
        const debt = await Debt.findById(req.params.id);
        if (!debt) return res.status(404).json({ message: 'Debt not found' });

        let client;
        (!clientID) ? client = await Client.findById(debt?.clientID) : client = await Client.findById(clientID);
        if (!client) return res.status(400).json({ error: 'Client not found' });

        const maxLength = 500;
        if (notes?.length > maxLength) return res.status(400).json({ error: `Notes must be less than ${maxLength} characters` });
        
        debt.type = type || debt.type;
        debt.description = description || debt.description;
        debt.clientID = clientID || debt.clientID;
        debt.inDebtValue = inDebtValue || debt.inDebtValue;
        debt.totalValue = totalValue || debt.totalValue;
        debt.notes = notes || debt.notes;

        await debt.save();

        res.status(200).json({message: 'Debt successfully updated', result: debt});
        
    } catch (error) {
        console.log("Error in updateDebt controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const getDebts = async (req, res) => {
    try {
        let debts;
        debts = await Debt.find();

        if (!debts) return res.status(400).json({ error: 'No debts found' });
        
        let debtsData = [];
        await Promise.all(debts?.map(async (debt) => {
            const clientInfo = await Client.findById(debt.clientID);

            debtsData.push({
                _id: debt._id,
                type: debt.type,
                description: debt.description,
                clientID: debt.clientID,
                clientInfo: clientInfo,
                inDebtValue: debt.inDebtValue,
                totalValue: debt.totalValue,
                notes: debt.notes,
                createdAt: debt.createdAt,
                updatedAt: debt.updatedAt
            });
        }));
        res.status(200).json(debtsData);
    } catch (error) {
        console.log("Error in getDebts controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export { createDebt, deleteDebt, updateDebt, getDebts };