import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema(
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

const Service = models.Service || model("Service", ServiceSchema);
export default Service;
