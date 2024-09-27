import connectDB from "@/config/database";
import Ticket from "@/models/Ticket";

export const GET = async () => {
    //await connectDB();
    return new Response("OK", { status: 200 });
};

export const POST = async (request) => {
    try {
        await connectDB();
        const formData = await request.formData();
        const ticketData = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            content: formData.get("content"),
        };
        console.log(ticketData);
        const newTicket = new Ticket(ticketData);
        await newTicket.save();
        return Response.redirect("https://bamboo-holistic.vercel.app/thankyou");
    } catch (error) {
        return new Response("Failed to add property", { status: 500 });
    }
};
