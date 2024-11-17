"use client";
import { useParams } from "next/navigation";

import { useState, useEffect } from "react";
import { fetchServiceById } from "@/utils/requests";
import Spinner from "@/components/Spinner";
import Link from "next/link";

const page = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [property, setProperty] = useState(null);
    console.log(slug);

    useEffect(() => {
        const fetchProperty = async () => {
            if (!slug) return;
            try {
                const property = await fetchServiceById(slug);
                setProperty(property);
            } catch (error) {
                console.error("Error fetching property", error);
            } finally {
                setLoading(false);
            }
        };
        if (property === null) fetchProperty();
    }, [slug, property]);

    // console.log("service: ", property);

    if (!property && !loading) {
        return <h1>Không tìm thấy</h1>;
    }

    return (
        <>
            {loading && <Spinner loading={loading} />}
            {!loading && property && (
                <div className="max-w-[1080px] lg:mx-auto mb-4">
                    <h1 className="text-center text-xl font-bold my-4">
                        {property.title}
                    </h1>
                    <div
                        dangerouslySetInnerHTML={{ __html: property.content }}
                    />
                </div>
            )}
            <div className="mt-4 mb-8">
                <Link
                    href="/service"
                    className="bg-primary text-white  text-base px-4 py-2  rounded-md"
                >
                    Quay lại &larr;
                </Link>
            </div>
        </>
    );
};
export default page;
