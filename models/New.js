import { Schema, model, models } from "mongoose";

const NewSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image_url: {
            type: String,
        },
        content: {
            type: String,
            required: true,
        },
        short_desc: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const New = models.New || model("New", NewSchema);
export default New;
