"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { fetchNewById } from "@/utils/requests";
import tel from "@/assets/images/tel.png";
import email from "@/assets/images/email.png";
import address from "@/assets/images/address.png";
import map from "@/assets/images/map.jpg";
import EditForm from "@/components/EditForm";
import Script from "next/script";

const page = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("id", id);
    useEffect(() => {
        const fetchProperty = async () => {
            if (!id) return;
            try {
                const property = await fetchNewById(id);
                setProperty(property);
            } catch (error) {
                console.error("Error fetching property", error);
            } finally {
                setLoading(false);
            }
        };
        if (property === null) fetchProperty();
    }, [id, property]);
    return (
        <div className="bg-secondary py-10 px-8">
            {loading && <div>Loading</div>}
            {!loading && property && <EditForm property={property} id={id}/>}

            <Script
                src="https://widget.cloudinary.com/v2.0/global/all.js"
                strategy="afterInteractive"
            />
        </div>
    );
};
export default page;
