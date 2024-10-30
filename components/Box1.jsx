import { inter } from "@/assets/styles/fonts";
import Image from "next/image";
import image1 from "@/assets/images/1.png";
import Link from "next/link";

const Box1 = () => {
    return (
        <div className="bg-primary flex flex-col  lg:text-left lg:flex-row text-white  pt-10 max-w-[1080px]  mx-auto gap-10 lg:gap-28  relative before:content-[''] before:bg-primary  before:absolute before:h-full before:w-[200vw] before:left-[-100vw] before:z-[-1] before:top-0">
            <div className="flex-1">
                <h1
                    //className="text-4xl font-bold mt-10"
                    className={`text-4xl font-bold mt-10 ${inter.className}`}
                >
                    Chăm Sóc Bạn Bằng Đôi Tay Hiểu Biết
                </h1>
                <p className="mt-6 text-lg text-justify ">
                    Bạn xứng đáng được sống một cuộc sống mạnh khỏe, không đau
                    đớn và chúng tôi ở đây để giúp bạn biến điều đó thành hiện
                    thực! Applied Kinesiology (AK) là một phương pháp an toàn,
                    không xâm lấn và thuận tự nhiên để giúp bạn đạt được sức
                    khỏe tối ưu cho cá nhân mình.
                </p>
                <div className="mt-8">
                    <Link
                        href="/contact"
                        className="bg-white text-primary font-bold text-2xl p-4 rounded-sm"
                    >
                        Đặt lịch khám
                    </Link>
                </div>
            </div>
            <div className=" flex-0 lg:relative lg:top-10 ">
                <Image src={image1} alt="Picture of the author" />
            </div>
        </div>
    );
};
export default Box1;
