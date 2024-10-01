import Image from "next/image";
import Link from "next/link";
import image3 from "@/assets/images/3.png";
import image4 from "@/assets/images/4.png";

const Box5 = () => {
    return (
        <div className="bg-primary py-2 text-white">
            <div className="flex  flex-col lg:flex-row py-4 max-w-[1080px]  mx-auto gap-10 px-20">
                <div className="">
                    <div className="flex flex-col lg:flex-row">
                        <Image
                            className="block mx-auto"
                            src={image3}
                            alt="Picture of the author"
                        />
                        <div className="content-center  text-center">
                            <p className="content-center">Điện thoại</p>
                            <p className="content-center">096 985 6512</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row">
                        <Image
                            className="block mx-auto"
                            src={image4}
                            alt="Picture of the author"
                        />
                        <p className=" content-center text-center">
                            541/46A Huỳnh Văn Bánh, P13, Phú Nhuận, Hồ Chí Minh
                        </p>
                    </div>
                </div>
                <div className="mx-auto content-center">
                    <Link
                        className="bg-white text-primary font-bold  px-4 py-2 rounded-sm "
                        href="/contact"
                    >
                        Đặt lịch khám
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Box5;
