import Image from "next/image";
import image1 from "@/assets/images/1.png";
import Link from "next/link";
const Box1 = () => {
    return (
        <div className="bg-primary">
            <div className="flex  text-white pt-20 max-w-screen-lg mx-auto gap-10">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold">
                        Chăm Sóc Bằng Đôi Tay Hiểu Biết
                    </h1>
                    <p className="mt-6 text-lg">
                        Bạn xứng đáng được sống một cuộc sống mạnh khỏe, không
                        đau đớn và chúng tôi ở đây để giúp bạn biến điều đó
                        thành hiện thực! Applied Kinesiology(AK) là một phương
                        pháp an toàn, không xâm lấn và thuận tự nhiên để giúp
                        bạn đạt được sức khỏe tối ưu cho cá nhân mình.
                    </p>
                    <div className="mt-6">
                        <button className="bg-white text-primary font-bold text-2xl p-4 rounded-sm">
                            Đặt lịch khám
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <Image src={image1} alt="Picture of the author" />
                </div>
            </div>
        </div>
    );
};
export default Box1;