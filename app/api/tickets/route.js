import connectDB from "@/config/database";
import Ticket from "@/models/Ticket";

export const GET = async () => {
    await connectDB();
    const tickets = await Ticket.find({});
    return new Response(JSON.stringify(tickets), {
        status: 200,
        header: {
            "Cache-Control": "public, s-maxage=1",
            "CDN-Cache-Control": "public, s-maxage=60",
            "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
        },
    });
};

export const fetchCache = "force-no-store";
