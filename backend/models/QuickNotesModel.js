import mongoose from "mongoose";

const quickNoteSchema = mongoose.Schema(
	{
		notes: {
			type: String,
            default: ''
		}
	},
	{
		timestamps: true,
	}
);

const QuickNote = mongoose.model("QuickNote", quickNoteSchema);

export default QuickNote;