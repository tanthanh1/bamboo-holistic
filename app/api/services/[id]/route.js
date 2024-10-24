import connectDB from "@/config/database";
import Service from "@/models/Service";

export const OPTIONS= (request)=>{
    return new Response(JSON.stringify({status:'OK'}),{
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "https://www.bambooholistic.vn",
            'Vary':'Origin',
            'Access-Control-Allow-Headers':'Content-Type'
        },
    }
}
export const GET = async (request, { params }) => {
    try {
        await connectDB();
        console.log("params id", params.id);
        const property = await Service.findById(params.id);
        if (!property)
            return new Response("Service not found", { status: 404 });
        return new Response(JSON.stringify(property), {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "https://www.bambooholistic.vn",
                'Vary':'Origin',
                'Access-Control-Allow-Headers':'Content-Type'
            },
        });
    } catch (error) {
        console.log(error);
        return new Response("Something Went Error", { status: 500 });
    }
};
