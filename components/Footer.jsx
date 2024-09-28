import Image from "next/image";
import Link from "next/link";
import logo2 from "@/assets/images/logo2.png";
import image1 from "@/assets/images/a1.png";
import image2 from "@/assets/images/a2.png";
import image3 from "@/assets/images/a3.png";

const Footer = () => {
    return (
        <div className="py-2 ">
            <div className="flex flex-col lg:flex-row max-w-[1080px]  mx-auto lg:gap-10 px-20">
                <div className="">
                    <div className="">
                        <Image className="" src={logo2} alt="Bamboo Holistic" />
                    </div>
                    <div className="">
                        <div className="flex-row flex gap-4 justify-center lg:justify-start">
                            <Image className="" src={image1} alt="Youtuber" />
                            <Image className="" src={image2} alt="Email" />
                            <Image className="" src={image3} alt="Facebook" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 lg:mt-0 lg:py-8 mx-auto">
                    <p className="content-center font-bold">
                        Thời gian mở cửa:
                    </p>
                    <p className="content-center">Từ 9h đến 19h (T2-T7)</p>
                </div>
                <div className="my-8 lg:my-0 lg:py-8 mx-auto ">
                    <Link href="/" className="content-center block">
                        Trang chủ
                    </Link>

                    <Link href="/about" className="content-center block">
                        Giới thiệu
                    </Link>
                    <Link href="/service" className="content-center block">
                        Danh mục trị liệu
                    </Link>
                    <Link href="contact" className="content-center block">
                        Liên hệ
                    </Link>
                </div>
            </div>
            <div className="border-t-2">
                <p className="text-center mt-6">
                    Copyright © 2024 Bamboo Holistic
                </p>
            </div>
        </div>
    );
};
export default Footer;
