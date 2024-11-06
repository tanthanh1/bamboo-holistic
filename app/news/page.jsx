"use client";
import Link from "next/link";
import { fetchNews } from "@/utils/requests";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";

export const revalidate = 60;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const NewsPage = () => {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

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
                    <div className="bg-primary text-white  mx-auto pt-8 pb-10 relative before:content-[''] before:bg-primary  before:absolute before:h-full before:w-[200vw] before:left-[-100vw] before:z-[-1] before:top-0">
                        <h1 className="text-center text-2xl font-bold">
                            Tin Tức
                        </h1>
                    </div>
                    <div className="bg-secondary relative before:content-[''] before:bg-secondary  before:absolute before:h-full before:w-[200vw] before:left-[-100vw] before:z-[-1] ">
                        <div className="max-w-[1080px]  mx-auto py-8 ">
                            <h2 className="text-xl font-bold text-center">
                                Kiến thức và các bí quyết chăm sóc sức khỏe tự
                                nhiên
                            </h2>
                            <p className="text-center mt-2 mb-8">
                                Hãy xây dựng thói quen tầm soát định kỳ và không
                                chủ quan khi có triệu chứng bất thường. Liên hệ
                                ngay với Bamboo Holistic để được hỗ trợ tư vấn!
                            </p>
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-20">
                                {news.map((ticket) => (
                                    <div className="flex flex-col border-b-2 pb-8 lg:border-b-0 lg:pb-0">
                                        <div>
                                            <Image
                                                className="mx-auto lg:mx-0"
                                                src={ticket.image_url}
                                                width={1800}
                                                height={400}
                                                sizes="100vw"
                                                priority={true}
                                                alt={ticket.title}
                                            />
                                        </div>

                                        <div className="flex-grow">
                                            <div className="flex flex-col justify-between h-full">
                                                <div>
                                                    <p className="text-center p-2 font-bold">
                                                        {ticket.title}
                                                    </p>
                                                    <p>{ticket.short_desc}</p>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <Link
                                                        href={`/news/${ticket._id}`}
                                                        className="bg-primary text-white font-semibold  px-8 py-2 rounded-md"
                                                    >
                                                        Xem Tiếp
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default NewsPage;

{
    /* <div className="flex flex-col border-b-2 pb-8 lg:border-b-0 lg:pb-0">
<div>
    <Image
        className="mx-auto lg:mx-0"
        src={image1}
        alt="Dau co vai gay"
    />
</div>
<div className="flex-grow">
    <div className="flex flex-col justify-between h-full">
        <div>
            <p className="text-center p-2 font-bold">
                Đau cổ vai gáy
            </p>
            <p>
                Đau vai gáy là tình trạng cơ vùng
                vai gáy co cứng, gây đau đớn và hạn
                chế vận động khi quay cổ hay quay
                đầu. Bệnh làm giảm khả năng chuyển
                động khớp cổ ảnh hưởng tới chất
                lượng cuộc sống và năng suất làm
                việc.
            </p>
        </div>

        <div className="mt-4 text-center">
            <Link
                href="/service/6719b8f349202842cc8e57ca"
                className="bg-primary text-white font-semibold  px-8 py-2 rounded-md"
            >
                Xem Tiếp
            </Link>
        </div>
    </div>
</div>
</div> */
}
