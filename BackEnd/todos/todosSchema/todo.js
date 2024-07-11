import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const todoSchema = new Schema(
    {
        todo: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const todoModal = model("todos", todoSchema);
export { todoModal };
