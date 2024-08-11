import QuickNote from "../models/QuickNotesModel.js";

const updateQuickNotes = async (req, res) => {    
    try {
        const { notes } = req.body;
        const result = await QuickNote.find();
        result[0].notes = notes || result[0].notes;
        await result[0].save();

        res.status(200).json({ message: "Quick notes updated successfully", result: result[0]?.notes });
    } catch (error) {
        console.log("Error in updateQuickNotes controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

const getQuickNotes = async (req, res) => {
    try {
        let notes;
        notes = await QuickNote.find().select('-updatedAt');

        if (!notes) return res.status(400).json({ error: 'No notes found' });
        res.status(200).json(notes[0]?.notes);
    } catch (error) {
        console.log("Error in getQuickNotes controller", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export { updateQuickNotes, getQuickNotes };