"use client";
import { useState } from "react";
import Image from "next/image";
import tel from "@/assets/images/tel.png";
import email from "@/assets/images/email.png";
import address from "@/assets/images/address.png";
import map from "@/assets/images/map.jpg";
import NewsForm2 from "@/components/NewsForm2";
import Script from "next/script";

const PostPage = () => {
    return (
        <div className="bg-secondary py-10">
            <NewsForm2 />
            <Script
                src="https://widget.cloudinary.com/v2.0/global/all.js"
                strategy="afterInteractive"
            />
        </div>
    );
};
export default PostPage;
