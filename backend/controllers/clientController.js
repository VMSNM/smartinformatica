import Client from "../models/ClientModel.js";
import Order from "../models/OrderModel.js";
import Service from "../models/ServiceModel.js";
import Debt from "../models/DebtModel.js";

const createClient = async (req, res) => {    
    try {
        const { name, phoneNumber, email, notes } = req.body;
        if (!name || !phoneNumber) return res.status(400).json({ error: 'Name and phone number fields are required' });

        const maxLength = 500;
        if (notes?.length > maxLength) return res.status(400).json({ error: `Notes must be less than ${maxLength} characters` });

        const newClient = new Client({
            name,
            phoneNumber,
            email: email || '',
            notes: notes || 'No relevant notes'
        })
        await newClient.save();

        res.status(200).json({ message: "Client created successfully", result: newClient });
    } catch (error) {
        console.log("Error in createClient controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const deleteClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) return res.status(404).json({ message: 'Client not found' });

        await Client.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Client deleted successfully", result: client });

    } catch (error) {
        console.log("Error in deleteClient controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const updateClient = async (req, res) => {
    const { name, phoneNumber, email, notes } = req.body;
    try {
        const client = await Client.findById(req.params.id);
        if (!client) return res.status(404).json({ message: 'Client not found' });
        
        client.name = name || client.name;
        client.phoneNumber = phoneNumber || client.phoneNumber;
        client.email = email || client.email;
        client.notes = notes || client.notes;

        await client.save();

        res.status(200).json({message: 'Client successfully updated', result: client});
        
    } catch (error) {
        console.log("Error in updateClient controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const getClients = async (req, res) => {
    try {
        let clients;
        clients = await Client.find().select('-updatedAt');

        if (!clients) return res.status(400).json({ error: 'No clients found' });
        res.status(200).json(clients)
    } catch (error) {
        console.log("Error in getClients controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const getClientByID = async (req, res) => {
    try {
        const { id } = req.params;

        const client = await Client.findById(id);
        if (!client) return res.status(400).json({ error: 'Client not found' });

        const orders = await Order.find({ clientID: id });
        const services = await Service.find({ clientID: id });
        const debts = await Debt.find({ clientID: id });


        res.status(200).json({ result: {orders, services, debts}});
    } catch (error) {
        console.log("Error in getClientByID controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export { createClient, deleteClient, updateClient, getClients, getClientByID };