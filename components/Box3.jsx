import Image from "next/image";
import image3 from "@/assets/images/3.jpg";
import image4 from "@/assets/images/4.jpg";
import image5 from "@/assets/images/5.jpg";
import Link from "next/link";
const Box3 = () => {
    return (
        <div className="bg-secondary">
            <div className="text-black pt-10 max-w-[1080px]  mx-auto gap-10 px-10">
                <p className="text-center">Danh mục trị liệu</p>
                <h2 className="text-xl font-bold text-center mt-2">
                    Điều trị tận gốc các vấn đề xương khớp
                </h2>
                <div className="flex gap-10 mt-8 ">
                    <div className="flex-1 bg-white p-10">
                        <Image
                            className="block mx-auto"
                            src={image3}
                            alt="Picture of the author"
                        />
                        <p className="text-center mt-4">Đau cổ vai gáy </p>
                    </div>
                    <div className="flex-1 bg-white p-10">
                        <Image
                            className="block mx-auto"
                            src={image4}
                            alt="Picture of the author"
                        />
                        <p className="text-center mt-4">
                            Chấn thương thể thao{" "}
                        </p>
                    </div>
                    <div className="flex-1 bg-white p-10">
                        <Image
                            className="block mx-auto"
                            src={image5}
                            alt="Picture of the author"
                        />
                        <p className="text-center mt-4">Đau thần kinh toạ </p>
                    </div>
                </div>
                <div className="mt-6">
                    <button className="bg-primary text-white font-semibold text-lg px-10 py-2 rounded-md block mx-auto">
                        Xem Tất Cả Danh Mục
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Box3;
