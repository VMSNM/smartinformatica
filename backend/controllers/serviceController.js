import Client from "../models/ClientModel.js";
import Service from "../models/ServiceModel.js";

const createService = async (req, res) => {    
    try {
        const { equipment, description, clientID, price, status, notes } = req.body;
        if (!equipment || !description || !clientID) return res.status(400).json({ error: 'Equipment, description and client fields are required' });

        const client = await Client.findById(clientID);
        if (!client) return res.status(400).json({ error: 'Client not found' });

        const maxLength = 500;
        if (notes?.length > maxLength) return res.status(400).json({ error: `Notes must be less than ${maxLength} characters` });

        const newService = new Service({
            equipment,
            description,
            clientID,
            price: price || 0,
            status: status || 'Pending',
            notes: notes || 'No relevant notes'
        })
        await newService.save();
        newService.clientInfo = client;

        res.status(200).json({ message: "Service created successfully", result: newService });
    } catch (error) {
        console.log("Error in createService controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const deleteService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) return res.status(404).json({ message: 'Service not found' });

        await Service.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Service deleted successfully", result: service });

    } catch (error) {
        console.log("Error in deleteService controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const updateService = async (req, res) => {
    const { equipment, description, clientID, price, status, notes } = req.body;
    try {
        const service = await Service.findById(req.params.id);
        if (!service) return res.status(404).json({ message: 'Service not found' });

        let client;
        (!clientID) ? client = await Client.findById(service?.clientID) : client = await Client.findById(clientID);
        if (!client) return res.status(400).json({ error: 'Client not found' });

        const maxLength = 500;
        if (notes?.length > maxLength) return res.status(400).json({ error: `Notes must be less than ${maxLength} characters` });
        
        service.equipment = equipment || service.equipment;
        service.description = description || service.description;
        service.clientID = clientID || service.clientID;
        service.price = price || service.price;
        service.status = status || service.status;
        service.notes = notes || service.notes;

        await service.save();

        res.status(200).json({message: 'Service successfully updated', result: service});
        
    } catch (error) {
        console.log("Error in updateService controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const getServices = async (req, res) => {
    try {
        let services;
        services = await Service.find();

        if (!services) return res.status(400).json({ error: 'No services found' });
        
        let servicesData = [];
        await Promise.all(services?.map(async (service) => {
            const clientInfo = await Client.findById(service.clientID);

            servicesData.push({
                _id: service._id,
                equipment: service.equipment,
                description: service.description,
                clientID: service.clientID,
                clientInfo: clientInfo,
                price: service.price,
                status: service.status,
                notes: service.notes,
                createdAt: service.createdAt,
                updatedAt: service.updatedAt
            });
        }));
        res.status(200).json(servicesData);
    } catch (error) {
        console.log("Error in getServices controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export { createService, deleteService, updateService, getServices };