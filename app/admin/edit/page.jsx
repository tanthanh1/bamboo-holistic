"use client";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

import { useState, useEffect } from "react";
import { fetchNews } from "@/utils/requests";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import { Select } from "@mui/material";

const page = () => {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete?");

        if (!confirmed) return;

        const res = await fetch(`/api/news/${id}`, {
            method: "DELETE",
        });

        if (res.status === 200) {
            toast.success("Deleted");
        }
        console.log("deleted");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNews();
                setNews(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching property", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            {loading && <Spinner loading={loading} />}
            {!loading && news && (
                <div>
                    <select name="fruit" id="fruit">
                        <option value="apple">Dịch vụ</option>
                        <option value="apple">Tin tuc</option>
                    </select>

                    {news.map((x) => (
                        <div className="mb-4">
                            <h1 className="font-bold mb-2">{x.title}</h1>
                            <Link
                                className="bg-primary text-white px-4 py-1 rounded-sm "
                                target="_blank"
                                href={`/admin/edit/${x._id}`}
                            >
                                Edit
                            </Link>
                            <button
                                className="bg-red-400 text-white px-4 py-1 rounded-sm"
                                onClick={() => handleDelete(x._id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
export default page;

export const dynamic = "force-dynamic";
