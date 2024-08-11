import Client from "../models/ClientModel.js";
import Product from "../models/ProductModel.js";

const createProduct = async (req, res) => {    
    try {
        const { equipment, description, specifications, clientID, costPrice, sellPrice, notes } = req.body;
        if (!equipment || !description || !clientID) return res.status(400).json({ error: 'Equipment, description and client fields are required' });

        const client = await Client.findById(clientID);
        if (!client) return res.status(400).json({ error: 'Client not found' });

        const maxLength = 500;
        if (notes?.length > maxLength) return res.status(400).json({ error: `Notes must be less than ${maxLength} characters` });

        const newProduct = new Product({
            equipment,
            description,
            specifications: specifications || '',
            clientID,
            costPrice: costPrice || 0,
            sellPrice: sellPrice || 0,
            notes: notes || 'No relevant notes'
        })
        await newProduct.save();

        res.status(200).json({ message: "Product created successfully", result: newProduct });
    } catch (error) {
        console.log("Error in createProduct controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully", result: product });

    } catch (error) {
        console.log("Error in deleteProduct controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const updateProduct = async (req, res) => {
    const { equipment, description, specifications, clientID, costPrice, sellPrice, notes } = req.body;
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        let client;
        (!clientID) ? client = await Client.findById(product?.clientID) : client = await Client.findById(clientID);
        if (!client) return res.status(400).json({ error: 'Client not found' });

        const maxLength = 500;
        if (notes?.length > maxLength) return res.status(400).json({ error: `Notes must be less than ${maxLength} characters` });
        
        product.equipment = equipment || product.equipment;
        product.description = description || product.description;
        product.specifications = specifications || product.specifications;
        product.clientID = clientID || product.clientID;
        product.costPrice = costPrice || product.costPrice;
        product.sellPrice = sellPrice || product.sellPrice;
        product.notes = notes || product.notes;

        await product.save();

        res.status(200).json({message: 'Product successfully updated', result: product});
        
    } catch (error) {
        console.log("Error in updateProduct controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const getProducts = async (req, res) => {
    try {
        let products;
        products = await Product.find();

        if (!products) return res.status(400).json({ error: 'No products found' });
        
        let productsData = [];
        await Promise.all(products?.map(async (product) => {
            const clientInfo = await Client.findById(product.clientID);

            productsData.push({
                _id: product._id,
                equipment: product.equipment,
                description: product.description,
                specifications: product.specifications,
                clientID: product.clientID,
                clientInfo: clientInfo,
                costPrice: product.costPrice,
                sellPrice: product.sellPrice,
                notes: product.notes,
                createdAt: product.createdAt,
                updatedAt: product.updatedAt
            });
        }));
        res.status(200).json(productsData);
    } catch (error) {
        console.log("Error in getProducts controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export { createProduct, deleteProduct, updateProduct, getProducts };