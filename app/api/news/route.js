import connectDB from "@/config/database";
import New from "@/models/New";

export const POST = async (request) => {
    try {
        await connectDB();

        const formData = await request.formData();

        const newData = {
            title: formData.get("title"),
            content: formData.get("content"),
            image_url: "http",
        };
        const newNew = new New(newData);
        await newNew.save();
        return Response.redirect(`${process.env.NEXTAUTH_URL}/thankyou`);
    } catch (error) {
        console.log(error);
        return new Response("Failed to add property", { status: 500 });
    }
};

export const GET = async () => {
    await connectDB();
    const news = await New.find({});
    return new Response(JSON.stringify(news), {
        status: 200,
        headers: {
            "Cache-Control": "public, s-maxage=1",
            "CDN-Cache-Control": "public, s-maxage=60",
            "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
        },
    });
};

export const fetchCache = "force-no-store";
export const revalidate = 1;
