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
