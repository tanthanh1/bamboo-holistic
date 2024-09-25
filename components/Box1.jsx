import Image from "next/image";
import image1 from "@/assets/images/1.png";
import Link from "next/link";
const Box1 = () => {
    return (
        <div className="bg-primary">
            <div className="flex flex-col text-center lg:text-left lg:flex-row text-white  pt-10 max-w-[1080px]  mx-auto gap-10 lg:gap-28 ">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mt-10 px-8 lg:px-0">
                        Chăm Sóc Bằng Đôi Tay Hiểu Biết
                    </h1>
                    <p className="mt-6 text-lg text-justify px-8 lg:px-0">
                        Bạn xứng đáng được sống một cuộc sống mạnh khỏe, không
                        đau đớn và chúng tôi ở đây để giúp bạn biến điều đó
                        thành hiện thực! Applied Kinesiology(AK) là một phương
                        pháp an toàn, không xâm lấn và thuận tự nhiên để giúp
                        bạn đạt được sức khỏe tối ưu cho cá nhân mình.
                    </p>
                    <div className="mt-6 ">
                        <button className="bg-white text-primary font-bold text-2xl p-4 rounded-sm">
                            Đặt lịch khám
                        </button>
                    </div>
                </div>
                <div className=" flex-0 lg:relative lg:top-10 mx-auto">
                    <Image src={image1} alt="Picture of the author" />
                </div>
            </div>
        </div>
    );
};
export default Box1;
