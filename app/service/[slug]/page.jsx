"use client";
import { useParams } from "next/navigation";
import { fetchServiceById } from "@/utils/requests";

const page = async () => {
    const { slug } = useParams();
    console.log(slug);
    const property = await fetchServiceById(slug);

    return (
        <div className="max-w-[1080px] mx-auto mb-4">
            <h1 className="text-center text-xl font-bold my-4">
                {property.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: property.content }} />
        </div>
    );
};
export default page;
