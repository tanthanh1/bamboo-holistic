import { Schema, model, models } from "mongoose";

const NewSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const New = models.New || model("New", NewSchema);
export default New;
