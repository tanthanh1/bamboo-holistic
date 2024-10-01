import connectDB from "@/config/database";
import Ticket from "@/models/Ticket";

export const GET = async () => {
    await connectDB();
    const tickets = await Ticket.find({});
    return new Response(JSON.stringify(tickets), { status: 200 });
};
