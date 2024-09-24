import Image from "next/image";
import image3 from "@/assets/images/3.png";
import image4 from "@/assets/images/4.png";

const Box5 = () => {
    return (
        <div className="bg-primary py-10 text-white">
            <div className="flex  py-4 max-w-[1080px]  mx-auto gap-10 px-20">
                <div className="">
                    <div className="flex">
                        <Image
                            className=""
                            src={image3}
                            alt="Picture of the author"
                        />
                        <div>
                            {" "}
                            <p className="">Điện thoại</p>
                            <p className="">096 985 6512</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <Image
                            className="block mx-auto"
                            src={image4}
                            alt="Picture of the author"
                        />
                        <p className="text-center">
                            541/46A Huỳnh Văn Bánh, P13, Phú Nhuận, Hồ Chí Minh
                        </p>
                    </div>
                </div>
                <div className="">
                    <button className="bg-white text-primary font-bold  p-2 rounded-sm">
                        Đặt lịch khám
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Box5;
