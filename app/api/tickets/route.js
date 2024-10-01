import connectDB from "@/config/database";
import Ticket from "@/models/Ticket";

export const GET = async () => {
    await connectDB();
    const tickets = await Ticket.find({});
    return new Response(JSON.stringify(tickets), {
        status: 200,
        header: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store, no-cache, must-revalidate", // Ensures no caching
            Pragma: "no-cache", // HTTP/1.0 compatibility
            Expires: "0",
        },
    });
};
