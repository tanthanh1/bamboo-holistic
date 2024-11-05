"use client";
import { useParams } from "next/navigation";
import { fetchNewById } from "@/utils/requests";
import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";

const page = () => {
    const { slug } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(slug);

    useEffect(() => {
        const fetchProperty = async () => {
            if (!slug) return;
            try {
                const property = await fetchNewById(slug);
                setProperty(property);
            } catch (error) {
                console.error("Error fetching property", error);
            } finally {
                setLoading(false);
            }
            
        };
        if (property === null) fetchProperty();
    }, [slug, property]);

    if (!property && !loading) return <h1>Not found</h1>;

    return (
        <>
            {loading && <Spinner loading={loading} />}
            {!loading && property && (
                <div className="max-w-[1080px] mx-auto mb-4">
                    <h1 className="text-center text-xl font-bold my-4">
                        {property.title}
                    </h1>
                    <div
                        dangerouslySetInnerHTML={{ __html: property.content }}
                    />
                </div>
            )}
        </>
    );
};
export default page;
