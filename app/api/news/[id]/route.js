import connectDB from "@/config/database";
import New from "@/models/New";

export const revalidate = 60;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const GET = async (request, { params }) => {
    try {
        await connectDB();
        console.log("params id", params.id);
        const property = await New.findById(params.id);
        if (!property) return new Response("New not found", { status: 404 });
        return new Response(JSON.stringify(property), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new Response("Something Went Error", { status: 500 });
    }
};

export const PUT = async (request, { params }) => {
    try {
        await connectDB();

        const formData = await request.formData();
        const { id } = params;
        console.log("params id", id);

        const newData = {
            title: formData.get("title"),
            content: formData.get("content"),
            image_url: formData.get("image_url"),
            short_desc: formData.get("short_desc"),
        };

        const updatedProperty = await New.findByIdAndUpdate(id, newData, {
            new: true,
            upsert: false,
        });
        //const property = await New.findById(params.id);
        return new Response(JSON.stringify(updatedProperty), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new Response("Something Went Error", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        const id = params.id;

        await connectDB();

        const property = await New.findById(id);

        if (!property)
            return new Response("Property Not Found", { status: 404 });

        // Verify ownership

        await property.deleteOne();

        return new Response("Deleted", {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new Response("Something Went Wrong", { status: 500 });
    }
};
