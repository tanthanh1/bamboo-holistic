import Image from "next/image";
import image6 from "@/assets/images/6.jpg";
import image7 from "@/assets/images/7.jpg";
import image8 from "@/assets/images/8.jpg";
import image9 from "@/assets/images/9.jpg";
import Link from "next/link";
const Box4 = () => {
    return (
        <div className="bg-white py-10">
            <p className="text-center text-primary ">Vì sao chọn Chúng Tôi</p>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-36 py-4 max-w-[1080px]  mx-auto gap-10 px-8 lg:px-20">
                <div>
                    <Image
                        className="block mx-auto"
                        src={image7}
                        alt="Picture of the author"
                    />
                    <p className="text-center mt-4 ">
                        Giải quyết chính xác nguyên nhân gây bệnh
                    </p>
                </div>
                <div>
                    <Image
                        className="block mx-auto"
                        src={image8}
                        alt="Picture of the author"
                    />
                    <p className="text-center mt-4">
                        Không đau, hiệu quả nhanh
                    </p>
                </div>
                <div>
                    <Image
                        className="block mx-auto"
                        src={image6}
                        alt="Picture of the author"
                    />
                    <p className="text-center mt-4">
                        Kĩ thuật an toàn, tiết kiệm thời gian
                    </p>
                </div>
                <div>
                    <Image
                        className="block mx-auto"
                        src={image9}
                        alt="Picture of the author"
                    />
                    <p className="text-center mt-4">Không dùng thuốc</p>
                </div>
            </div>
        </div>
    );
};
export default Box4;
