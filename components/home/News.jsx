import Image from "next/image";
import image3 from "@/assets/images/tyct.jpg";
import image4 from "@/assets/images/dmcvg.jpg";
import image5 from "@/assets/images/dtkt.jpg";

import Link from "next/link";
import { inter } from "@/assets/styles/fonts";
const News = () => {
    return (
        <div className=" bg-secondary text-black py-10 max-w-[1080px]  mx-auto gap-10  lg:px-20 relative before:content-[''] before:bg-secondary  before:absolute before:h-full before:w-[200vw] before:left-[-100vw] before:z-[-1] before:top-0">
            <p className="text-center text-primary ">Câu chuyện khách hàng</p>
            <h2
                className={`text-xl font-bold text-center mt-2 ${inter.className}`}
            >
                Tổng hợp những trường hợp lâm sàng thường gặp
            </h2>
            <div className="flex flex-col lg:flex-row gap-10 mt-8 ">
                <div className="flex-1 bg-white p-10">
                    <Link href="/news/6718bc5d4ea8823a9f5ca90e">
                        <Image
                            className="block mx-auto"
                            src={image3}
                            alt="Picture of the author"
                        />
                    </Link>
                    <p className="text-center mt-4">Tê yếu cánh tay </p>
                </div>
                <div className="flex-1 bg-white p-10">
                    <Link href="/news/6718ce2c799dc4f1c7c960d7">
                        {" "}
                        <Image
                            className="block mx-auto"
                            src={image4}
                            alt="Picture of the author"
                        />
                    </Link>

                    <p className="text-center mt-4">Đau mỏi cổ vai gáy</p>
                </div>
                <div className="flex-1 bg-white p-10">
                    <Link href="/news/6718cd94799dc4f1c7c960d3">
                        <Image
                            className="block mx-auto"
                            src={image5}
                            alt="Picture of the author"
                        />
                    </Link>

                    <p className="text-center mt-4">Đau thần kinh toạ </p>
                </div>
            </div>
            <div className="mt-6 text-center">
                <Link
                    href="/news"
                    className="bg-primary text-white font-semibold text-lg px-10 py-2 rounded-md"
                >
                    Xem Tiếp
                </Link>
            </div>
        </div>
    );
};
export default News;
