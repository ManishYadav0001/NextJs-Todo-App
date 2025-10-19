import mongoose from "mongoose";

const todoSchema = mongoose.Schema({

    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"

    }

})

export const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema)