import Image from "next/image";
import image2 from "@/assets/images/2.png";
import Link from "next/link";
import { inter } from "@/assets/styles/fonts";
const Box2 = () => {
    return (
        <div className="flex flex-col lg:flex-row  pt-10 lg:pt-20 pb-10 max-w-[1080px]  mt-10 mx-auto gap-10 lg:px-20">
            <div className="flex-1">
                <Image src={image2} alt="Picture of the author" />
            </div>
            <div className="flex-1 text-black ">
                <h2 className="text-2xl text-primary">Giới thiệu</h2>
                <h1 className={`text-3xl mt-4 font-bold ${inter.className}`}>
                    Tinh hoa của Y Học Tự Nhiên
                </h1>
                <p className="mt-6 text-lg text-justify">
                    Chúng tôi áp dụng các trường phái trị liệu Y học tự nhiên
                    khác nhau của thế giới vào thăm khám và điều trị các vấn đề
                    Cơ Xương Khớp: Chiropractic, Mulligan, Osteopathy, Gonstead,
                    Applied Kinesiology...
                </p>
                <div className="mt-6">
                    <Link
                        href="/about"
                        className="bg-primary text-white font-semibold text-lg px-10 py-2 rounded-md"
                    >
                        Xem Tiếp
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Box2;
