import Image from "next/image";
import image2 from "@/assets/images/2.png";
import Link from "next/link";
const Box2 = () => {
    return (
        <div className="bg-white mt-10">
            <div className="flex  text-white pt-20 max-w-screen-lg mx-auto gap-10">
                <div className="flex-1">
                    <Image src={image2} alt="Picture of the author" />
                </div>
                <div className="flex-1 text-black px-16">
                    <h2 className="text-2xl ">Giới thiệu</h2>
                    <h1 className="text-3xl mt-4 font-bold">
                        Tinh hoa của Y Học Tự Nhiên
                    </h1>
                    <p className="mt-6 text-lg">
                        Chúng tôi áp dụng các trường phái trị liệu Y học tự
                        nhiên khác nhau của thế giới vào thăm khám và điều trị
                        các vấn đề Cơ Xương Khớp: Chiropractic, Mulligan,
                        Osteopathy, Gonstead, Applied Kinesiology...
                    </p>
                    <div className="mt-6">
                        <button className="bg-primary text-white font-semibold text-lg px-10 py-2 rounded-md">
                            Xem Tiếp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Box2;
