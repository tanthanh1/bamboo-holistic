import Image from "next/image";
import image3 from "@/assets/images/3.jpg";
import image4 from "@/assets/images/4.jpg";
import image5 from "@/assets/images/5.jpg";
import Link from "next/link";
import { inter } from "@/assets/styles/fonts";
const Box3 = () => {
    return (
        <div className=" bg-secondary text-black py-10 max-w-[1080px]  mx-auto gap-10  lg:px-20 relative before:content-[''] before:bg-secondary  before:absolute before:h-full before:w-[200vw] before:left-[-100vw] before:z-[-1] before:top-0">
            <p className="text-center text-primary ">Danh mục trị liệu</p>
            <h2
                className={`text-xl font-bold text-center mt-2 ${inter.className}`}
            >
                Điều trị tận gốc các vấn đề xương khớp
            </h2>
            <div className="flex flex-col lg:flex-row gap-10 mt-8 ">
                <div className="flex-1 bg-white p-10">
                    <Link href="/service/6719b6425993be44a6bcb09c">
                        <Image
                            className="block mx-auto"
                            src={image3}
                            alt="Picture of the author"
                        />
                    </Link>

                    <p className="text-center mt-4">Đau thần kinh toạ </p>
                </div>
                <div className="flex-1 bg-white p-10">
                    <Link href="/service/6719b8f349202842cc8e57ca">
                        <Image
                            className="block mx-auto"
                            src={image4}
                            alt="Đau cổ vai gáy"
                        />
                    </Link>

                    <p className="text-center mt-4">Đau cổ vai gáy</p>
                </div>
                <div className="flex-1 bg-white p-10">
                    <Link href="/service/6719bc89f1c0bee836ad322d">
                        <Image
                            className="block mx-auto"
                            src={image5}
                            alt="Picture of the author"
                        />
                    </Link>
                    <p className="text-center mt-4">Chấn thương thể thao </p>
                </div>
            </div>
            <div className="mt-6 text-center">
                <Link
                    href="/service"
                    className="bg-primary text-white font-semibold text-lg px-10 py-2 rounded-md"
                >
                    Xem Tất Cả Danh Mục
                </Link>
            </div>
        </div>
    );
};
export default Box3;
