import Client from "../models/ClientModel.js";
import Order from "../models/OrderModel.js";

const createOrder = async (req, res) => {    
    try {
        const { equipment, description, clientID, price, status, notes } = req.body;
        if (!equipment || !description || !clientID) return res.status(400).json({ error: 'Equipment, description and client fields are required' });

        const client = await Client.findById(clientID);
        if (!client) return res.status(400).json({ error: 'Client not found' });

        const maxLength = 500;
        if (notes?.length > maxLength) return res.status(400).json({ error: `Notes must be less than ${maxLength} characters` });

        const newOrder = new Order({
            equipment,
            description,
            clientID,
            price: price || 0,
            status: status || 'Pending',
            notes: notes || 'No relevant notes'
        })
        await newOrder.save();

        res.status(200).json({ message: "Order created successfully", result: newOrder });
    } catch (error) {
        console.log("Error in createOrder controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });

        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Order deleted successfully", result: order });

    } catch (error) {
        console.log("Error in deleteOrder controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const updateOrder = async (req, res) => {
    const { equipment, description, clientID, price, status, notes } = req.body;
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });

        let client;
        (!clientID) ? client = await Client.findById(service?.clientID) : client = await Client.findById(clientID);
        if (!client) return res.status(400).json({ error: 'Client not found' });

        const maxLength = 500;
        if (notes?.length > maxLength) return res.status(400).json({ error: `Notes must be less than ${maxLength} characters` });
        
        order.equipment = equipment || order.equipment;
        order.description = description || order.description;
        order.clientID = clientID || order.clientID;
        order.price = price || order.price;
        order.status = status || order.status;
        order.notes = notes || order.notes;

        await order.save();

        res.status(200).json({message: 'Order successfully updated', result: order});
        
    } catch (error) {
        console.log("Error in updateOrder controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const getOrders = async (req, res) => {
    try {
        let orders;
        orders = await Order.find();

        if (!orders) return res.status(400).json({ error: 'No orders found' });
        
        let ordersData = [];
        await Promise.all(orders?.map(async (order) => {
            const clientInfo = await Client.findById(order.clientID);

            ordersData.push({
                _id: order._id,
                equipment: order.equipment,
                description: order.description,
                clientID: order.clientID,
                clientInfo: clientInfo,
                price: order.price,
                status: order.status,
                notes: order.notes,
                createdAt: order.createdAt,
                updatedAt: order.updatedAt
            });
        }));
        res.status(200).json(ordersData);
    } catch (error) {
        console.log("Error in getOrders controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export { createOrder, deleteOrder, updateOrder, getOrders };